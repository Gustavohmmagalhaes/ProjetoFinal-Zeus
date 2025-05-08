
interface InitialInputLoginProps{
    email: string,
    password: string,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void;
}

export default function InitialInputLogin({email,password, setEmail, setPassword}: InitialInputLoginProps) {
    

    return (
        <>  
            <div className='input'>
                <label>Email</label>
                <input id='email' type="email" name='email' placeholder='Entre com endereço de email' value={email} onChange={(e)=> setEmail(e.target.value)} required />
            </div>
            <div className='input'>
                <label>Senha</label>
                <input id='senha' type="password" name='senha' placeholder='............' value={password} onChange={(e)=> setPassword(e.target.value)}required />
            </div>

        </>
    )
}