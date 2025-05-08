import '../login/LoginStyle.css'
import imageRecovery from '../../assets/ImageCard.svg'
import logo from '../../assets/logo.svg'
import ButtonCreateLogin from '../../components/loginStart/ButtonCreateLogin'
import ButtonFooter from '../../components/loginStart/ButtonFooter'
import VerificationTextHeaderLogin from '../../components/emailVerification/VerificationTextHeaderLogin'
import { useAuth } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

export default function ConfirmEmailCode(){
  
    const { resetEmail } = useAuth();
    useEffect(() => {
        console.log("Email no contexto em /confirmCode:", resetEmail);
        const storedEmail = sessionStorage.getItem('resetEmail');
        console.log("Email no sessionStorage em /confirmCode:", storedEmail);
      }, []);
    const navigate = useNavigate();
    
   
    const handleNavigate = () => {
        navigate('/signup'); // Redireciona para a página de cadastro
    };

    const handleNavigatePassword = () => {
        navigate('/PasswordReset'); // Redireciona para a página de cadastro
    };


        
    
    return(
        <div className="container">
                <div className="form">
                    <form onSubmit={(e) => e.preventDefault()}>

                        <div className='form-header'>
                            <img src={logo} className='logo'></img>
                            <ButtonCreateLogin onClick={handleNavigate} >
                                criar conta
                            </ButtonCreateLogin>
                        </div>

                        <div className='container-input'>
                            <div className='input-header'>
                               
                               
                            <VerificationTextHeaderLogin/> 
                          
                            </div>

                            <div className='form-input'>
                                
                               <div className='confirm'>
                                    <input type="number" className='code' name='code' required/>
                                    <input type="number" className='code' name='code' required/>
                                    <input type="number" className='code' name='code' required/>
                                    <input type="number" className='code' name='code' required/>
                                    <input type="number" className='code' name='code' required/>
                                    <input type="number" className='code' name='code' required/>
                               </div>
                                <ButtonFooter onClick={handleNavigatePassword} type="button">
                                    Enviar
                                </ButtonFooter>
                            </div>
                            
                            <p>{status}</p>
                        </div>

                    </form>
                </div>

                <div className="image-side">
                    <img src={imageRecovery} alt="imagem de Recuperação de senha" className="image"/>
                </div>
            </div>
    )
}