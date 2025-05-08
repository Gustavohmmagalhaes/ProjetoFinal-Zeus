import {useState} from 'react';
import logo from '../../assets/logo.svg'
import ButtonFooter from '../../components/loginStart/ButtonFooter';
import '../login/LoginStyle.css'
import imageLogin from '../../assets/imageLogin.png'

import InputSignup from './InputSignup';
import TextHeaderSignup from './TextHeaderSignup';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';


export default function Singup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    async function handleSignup(e: React.FormEvent) {
        e.preventDefault();

        setStatus('Enviando...');

        try {
            const response = await api.post('/signup', { name, email, password });

            if (response.status === 201 || response.status === 200) {
                setStatus('Usuário criado com sucesso!');
            } else {
                setStatus('Erro ao criar usuário.');
            }
        } catch (err: any) {
            console.log(err); // ADICIONE ISSO
            setStatus('Erro: ' + (err.response?.data?.message || err.message || 'Erro desconhecido'));
          }
          
    }



    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleSignup}>
                    <div className='form-header'>
                        <img src={logo} className='logo'></img>

                    </div>

                    <div className='container-input'>
                        <div className='input-header'>
                            <TextHeaderSignup />

                        </div>

                        <div className='form-input'>
                            <div className='content'>
                                <div className='content-input'>
                                    <InputSignup
                                        email={email}
                                        password={password}
                                        name={name}
                                        setEmail={setEmail}
                                        setPassword={setPassword}
                                        setName={setName}
                                    />

                                </div>
                                <span className='span'>
                                    Já tem uma conta ?
                                    <Link to="/login">Login</Link>
                                </span>

                            </div>


                            <ButtonFooter type='submit' >
                                Criar Conta
                            </ButtonFooter>
                            <p>{status}</p>
                        </div>


                    </div>

                </form>
            </div>

            <div className="image-side">
                <img src={imageLogin} alt="imagem de login" className="image" />
            </div>
        </div>
    )
}