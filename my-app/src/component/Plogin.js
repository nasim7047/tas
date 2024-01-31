
  import React from 'react'
  import { Link } from 'react-router-dom'
  import "../CSS/log.css";
  
  export default function Plogin() {
    // function Login() {
    //   var x = document.getElementById("logPassword");
    //   if (x.type === "password") {
    //     x.type = "text";
    //   } else {
    //     x.type = "password";
    //   }
    // }

    return (
      <>
          <body style={{backgroundImage: `url(/images/tech.jpg)`}}>
  <nav id="navbar">
    <ul>
      <li className="item"><Link to="/">Home</Link></li>
      <li className="item"><Link to="/register">Register As A Professional</Link></li>
      <li className="item"><Link to="/contact">Contact Us</Link></li>
      {/* <li className="item"><Link to="#">Help</Link></li> */}
    </ul>
  </nav>

  <div className="container">
    <div className="box2">
      
      <div className="box-login" id="login">
        <div className="top-header">
          <h3>Login</h3>
        </div>
        <form action="" method="post">
          {/* {% csrf_token %} */}
          <div className="input2-group">
            <div className="input2-field">
                <input type="text" name="email" className="input-box" id="logUser" required/>
                <label htmlFor="logUser">User Name or Email </label>
            </div>
                <div className="input2-field">
                    <input type="password" name="password" className="input-box" id="logPassword" required/>
                    <label htmlFor="logPassword">Password</label>
                    <div class="eye-area">
                <div class="eye-box" onclick="Login()">
                  <i class="fa-regular fa-eye" id="eye"></i>
                  <i class="fa-regular fa-eye-slash" id="eye-slash"></i>
                </div>
              </div>
            </div>
            </div>
            <div className="remember">
              <input type="checkbox" id="formCheck" className="check"/>
              <label htmlFor="formCheck"> Remember Password</label>
            </div>
            <div className="input2-field">
              <input type="submit" className="input-submit" value="Sign In"/>
            </div>
            <div className="text-center">
              
              <p>Not a member? <Link to="/register">Register</Link></p>
        
              <div className="forgot">
                <Link to="signup">Forgot password?</Link>
              </div>
            </div>
        </form>
      </div>
    </div>
    </div>
    </body>
    </>
  )
}
