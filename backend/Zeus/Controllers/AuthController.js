const bcrypt = require('bcrypt')
const UserModel = require("../Models/User")
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(409).json({ message: 'User is already exist, you can login', success: false })
        }
        const userModel = new UserModel({ name, email, password })
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save()
        res.status(201).json({ message: 'Signup successfully', success: true })
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', success: false })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        const error = "Auth failed email or password is wrong"
        if (!user) {
            return res.status(403).json({ message: error, success: false })
        }
        const isPassEqual = await bcrypt.compare(password, user.password)
        if (!isPassEqual) {
            return res.status(403).json({ message: error, success: false })
        }
        const jwtToken = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.status(200).json({ message: 'Login success', success: true, jwtToken, email, name: user.name })
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', success: false })
    }
}

const isDev = process.env.NODE_ENV === 'development';

console.log(process.env.EMAIL_USER)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: isDev ? { rejectUnauthorized: false } : undefined,
});

const sendCode = async (req, res) => {
    const { email } = req.body

    try {

        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString()

        user.resetCode = code
        user.codeExpires = new Date(Date.now() + 10 * 60 * 1000)
        await user.save()

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Código de verificação',
            text: `Seu código de verificação é: ${code}`,
        });
        res.status(200).json({ message: 'Código enviado com sucesso', name: user.name });

    } catch (error) {
        console.error('Erro ao enviar código', error)
        res.status(500).json({ message: 'Erro ao enviar código', error: error.message })
    }
}

const recoveryPassword = async (req, res) => {
    const { newPassword, resetEmail } = req.body;

    try {
        const user = await UserModel.findOne({ email: resetEmail });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado', success: false });
        }

        // Verifica se a nova senha é válida
        if (!newPassword || newPassword.length < 6) {
            return res.status(400).json({ message: 'A nova senha é inválida. Ela deve ter pelo menos 6 caracteres.', success: false });
        }

        user.password = await bcrypt.hash(newPassword, 10);

        // Limpa possíveis dados de recuperação anteriores, se existirem
        user.resetCode = undefined;
        user.codeExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Senha alterada com sucesso', success: true });
    } catch (error) {
        console.error('Erro ao redefinir senha', error);
        res.status(500).json({ message: 'Erro ao redefinir a senha', success: false });
    }
};


module.exports = {
    signup,
    login,
    sendCode,
    recoveryPassword
}