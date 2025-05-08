import '../login/LoginStyle.css'
import imageRecovery from '../../assets/ImageCard.svg'
import logo from '../../assets/logo.svg'
import ButtonCreateLogin from '../../components/loginStart/ButtonCreateLogin'
import ButtonFooter from '../../components/loginStart/ButtonFooter'
import RecoveryTextHeaderLogin from '../../components/loginRecovery/RecoveryTextHeaderLogin'
import RecoveryInputLogin from '../../components/loginRecovery/RecoveryInputLogin'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api'
import { useAuth } from '../../context/AuthContext';


export default function RecoveryPassword(){
  
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const { setResetEmail } = useAuth();
    
   
    const handleNavigate = () => {
        navigate('/signup'); // Redireciona para a página de cadastro
    };
    
   

    const handleSendCode = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("Enviando email:", email); 
            const response = await api.post('/send-code', { email });
            if(response.status === 201 || response.status === 200){
                setStatus('Código enviado com sucesso!');  
                setResetEmail(email);
                console.log("Reset Email no contexto:", email);
                setTimeout(() => {
                    navigate('/confirmCode');
                }, 1500);
            }else {
                
                setStatus('Erro ao enviar codigo.');
            }
            
        } catch (error) {
            setStatus('Erro ao enviar o código. Verifique o email.');
           
            console.error(error);
        }
    };
    
    return(
        <div className="container">
                <div className="form">
                    <form onSubmit={handleSendCode}>

                        <div className='form-header'>
                            <img src={logo} className='logo'></img>
                            <ButtonCreateLogin onClick={handleNavigate} >
                                criar conta
                            </ButtonCreateLogin>
                        </div>

                        <div className='container-input'>
                            <div className='input-header'>
                               
                                <RecoveryTextHeaderLogin/>
                        
                            </div>

                            <div className='form-input'>
                                <div className='content'>
                                    <div className='content-input'>
                    
                                    </div>
                                    
                                
                                </div> 
                                 <RecoveryInputLogin
                                    email = {email}
                                    setEmail={setEmail}
                                 
                                 />
                               
                                <ButtonFooter type='submit' >
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