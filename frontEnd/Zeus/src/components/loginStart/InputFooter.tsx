import { Link } from "react-router-dom";

export default function InputFooter() {
    return (
        <div className='content-footer'>
            <label className="remember">
                <input type="checkbox" id="lembrar" name="lembrar" />
                <span>Lembrar</span>
            </label>
            <span className='span'>
                
                <Link to="/recovery">Esqueceu sua Senha?</Link>
            </span>
        </div>
    )
}