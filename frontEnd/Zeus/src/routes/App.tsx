import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Dashboard from '../pages/dashboard/Dashboard'
import RecoveryPassword from '../pages/recoveryPassword/RecoveryPassword';
import ConfirmEmailCode from '../pages/confirmEmailCode/confirmEmailCode';
import PasswordReset from '../pages/passwordReset/PasswordReset';
// import PasswordChanged from '../components/warnings/PasswordChanged';

export default function App() {

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/recovery' element={<RecoveryPassword/>} />
        <Route path='/confirmCode' element={<ConfirmEmailCode/>} />
        <Route path='/passwordReset' element={<PasswordReset/>} />
      </Routes>
    </Router>
  )
}


