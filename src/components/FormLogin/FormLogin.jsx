import "./FormLogin.css";
import logo from "../../img/logo-frontify.svg";
import videogif from "../../img/videogif.gif";
import { useForm } from "react-hook-form";

function FormLogin() {
  return (
    <div id="container">
      <form>
        <img src={logo} alt="" />
        <br></br>
  
        <button className="register-button">Entrar sin registrarse</button>
  
        <label for="email"></label>
        <input type="email" className="email-input" id="email" placeholder="Correo electronico"/>
        
        <label for="password"></label>
        <input type="password" className="password-input" id="password" placeholder="Contraseña" required/>
  
      <button className="login-button">Login</button>
    </form>
  </div>
  );
}

export default FormLogin;
