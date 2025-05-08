interface InitialInputLoginProps{
    newPassword:string,
    setNewPassword: (newPassword:string)=>void,
    confimNewPassword:string,
    setconfimNewPassword:(confimNewPassword:string)=>void
}


export default function InitialInputLogin({newPassword,setNewPassword,confimNewPassword,setconfimNewPassword}:InitialInputLoginProps) {
    return (
        <>
            <div className='input'>
                <label htmlFor="email">Nova senha</label>
                <input className='senha' type="text" name='senha' placeholder='............'  value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} required />
            </div>

            <div className='input'>
                <label htmlFor="email">Confirmar nova senha</label>
                <input className='senha' type="text" name='senha' placeholder='............' value={confimNewPassword} onChange={(e)=> setconfimNewPassword(e.target.value)} required />
            </div>

        </>
    )
}