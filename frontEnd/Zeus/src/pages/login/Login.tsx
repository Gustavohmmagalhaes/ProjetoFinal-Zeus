import './LoginStyle.css'
import imageLogin from '../../assets/imageLogin.png'
import logo from '../../assets/logo.svg'
import ButtonCreateLogin from '../../components/loginStart/ButtonCreateLogin'
import InitialTextHeaderLogin from '../../components/loginStart/InitialTextHeaderLogin'
import InitialInputLogin from '../../components/loginStart/InitialInputLogin'
import InputFooter from '../../components/loginStart/InputFooter'
import ButtonFooter from '../../components/loginStart/ButtonFooter'
import {useState} from 'react';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom';

export default function LoginStart(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    
    async function handleLogin(e: React.FormEvent) {
            e.preventDefault();
    
            setStatus('Logando...');
    
            try {
                const response = await api.post('/login', { email, password });
    
                if (response.status === 201 || response.status === 200) {
                    setStatus('Login realizado com sucesso!');
                    navigate('/dashboard')
                } else {
                    setStatus('Erro ao fazer o login.');
                }
            } catch (err: any) {
                console.log(err); // ADICIONE ISSO
                setStatus('Erro: ' + (err.response?.data?.message || err.message || 'Erro desconhecido'));
              }
              
    }
        const handleNavigate = () => {
            navigate('/signup'); // Redireciona para a página de cadastro
          };
        
    

    return(
        <div className="container">
                <div className="form">
                    <form onSubmit={handleLogin}>

                        <div className='form-header'>
                            <img src={logo} className='logo'></img>
                            <ButtonCreateLogin onClick={handleNavigate} >
                                criar conta
                            </ButtonCreateLogin>
                        </div>

                        <div className='container-input'>
                            <div className='input-header'>
                                <InitialTextHeaderLogin/>

                            </div>

                            <div className='form-input'>
                                <div className='content'>
                                    <div className='content-input'>
                                        <InitialInputLogin
                                            email = {email}
                                            password={password}
                                            setEmail={setEmail}
                                            setPassword={setPassword}
                                        /> 
                                    </div>
                                    
                                    {<InputFooter/> }
                                </div> 
                               
                                <ButtonFooter  >
                                    Entrar
                                </ButtonFooter>
                            </div>
                            
                            <p>{status}</p>
                        </div>

                    </form>
                </div>

                <div className="image-side">
                    <img src={imageLogin} alt="imagem de login" className="image"/>
                </div>
            </div>
    )
}