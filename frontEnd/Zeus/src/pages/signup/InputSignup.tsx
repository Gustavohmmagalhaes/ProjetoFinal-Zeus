interface InitialInputLoginProps {
    email: string,
    password: string,
    name: string,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void,
    setName: (name: string) => void;
}

export default function InitialInputLogin({ email, password, name, setEmail, setPassword, setName }: InitialInputLoginProps) {


    return (
        <>
            <div className='input'>
                <label>Nome</label>
                <input className='senha' type="name" name='nome' placeholder='Digite o seu nome' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className='input'>
                <label>Email</label>
                <input className='email' type="email" name='email' placeholder='Entre com endereço de email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className='input'>
                <label>Senha</label>
                <input className='senha' type="password" name='senha' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

        </>
    )
}