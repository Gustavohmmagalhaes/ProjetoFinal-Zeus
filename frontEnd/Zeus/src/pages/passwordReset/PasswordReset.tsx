import '../login/LoginStyle.css';
import imageRecovery from '../../assets/ImageCard.svg';
import logo from '../../assets/logo.svg';
import ButtonCreateLogin from '../../components/loginStart/ButtonCreateLogin';
import ButtonFooter from '../../components/loginStart/ButtonFooter';
import PasswordResetTextHeaderLogin from '../../components/passwordReset/PasswordResetTextHeader';
import PasswordResetInput from '../../components/passwordReset/PasswordResetInput';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';

export default function PasswordReset() {
    const [newPassword, setNewPassword] = useState('');
    const [confimNewPassword, setconfimNewPassword] = useState('');
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    const { resetEmail } = useAuth();
    const handleNavigate = () => {
        navigate('/signup');
    };

    async function handleNewPassword(e: React.FormEvent) {
        e.preventDefault();


        if (newPassword !== confimNewPassword) {
            setStatus('As senhas não coincidem');
            return;
        }
        console.log("Não Estou vendo o email",resetEmail)
        setStatus('Alterando...');

        if (!resetEmail) {
            setStatus('Não foi possível recuperar o email. Tente novamente.');
            return;
        }

        
        try {
            
            const response = await api.post('/resetPassword', { newPassword, resetEmail });
            if (response.status === 200 || response.status === 201) {
                setStatus('Senha alterada com sucesso');
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            } else {
                setStatus('Erro ao alterar senha');
            }
        } catch (error) {
            console.error('Erro na requisição de redefinição de senha:', error);
            setStatus('Erro ao alterar senha');
        }
    }

    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleNewPassword}>

                    <div className="form-header">
                        <img src={logo} className="logo" alt="Logo" />
                        <ButtonCreateLogin onClick={handleNavigate}>
                            Criar conta
                        </ButtonCreateLogin>
                    </div>

                    <div className="container-input">
                        <div className="input-header">
                            <PasswordResetTextHeaderLogin />
                        </div>

                        <div className="form-input">
                            <div className="content">
                                <div className="content-input">
                                    <PasswordResetInput
                                        newPassword={newPassword}
                                        setNewPassword={setNewPassword}
                                        confimNewPassword={confimNewPassword}
                                        setconfimNewPassword={setconfimNewPassword}
                                    />
                                </div>
                            </div>

                            <ButtonFooter type="submit">
                                Redefinir
                            </ButtonFooter>
                        </div>

                        <p>{status}</p>
                    </div>

                </form>
            </div>

            <div className="image-side">
                <img src={imageRecovery} alt="imagem de Recuperação de senha" className="image" />
            </div>
        </div>
    );
}
