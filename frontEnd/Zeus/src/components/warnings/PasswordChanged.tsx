import warning from '../../assets/warning.svg'
import ButtonFooter from '../loginStart/ButtonFooter'
import './PasswordChangedStyle.css'
export default function PasswordChanged() {
    return (
        <>
          <div className="warning">
                <div className='imageWarning'>
                    <img src={warning} alt="imagem do aviso de confirmação de senha alterada" />
                </div>
                <div className='textWarning'>
                    <p className='title'>Parabéns</p>
                    <p>Você alterou sua senha com sucesso.</p>
                </div>
                <ButtonFooter>
                    Voltar para o login
                </ButtonFooter>
          </div>

        </>
    )
}