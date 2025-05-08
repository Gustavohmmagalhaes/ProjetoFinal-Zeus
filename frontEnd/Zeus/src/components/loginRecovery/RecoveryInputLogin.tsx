
interface RecoveryInputLoginProps{
    email: string,
    setEmail: (email:string) => void;
}

export default function RecoveryInputLogin({email, setEmail}:RecoveryInputLoginProps) {
    return (
        <>
            <div className='input'>
                <label htmlFor="email">Endereço de Email</label>
                <input id='email' type="email" name='email' placeholder='Entre com endereço de email' value={email} onChange={(e)=> setEmail(e.target.value)} required />
            </div>
           
        </>
    )
}