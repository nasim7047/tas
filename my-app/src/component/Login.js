import React from 'react'
import "../CSS/log.css";
export default function Login() {
    // var x = document.getElementById("logPassword");
    // if (x.type === "password") {
    //   x.type = "text";
    // } else {
    //   x.type = "password";
    // }
  return (
    <>
      <body style={{backgroundImage: `url(/images/bg3.jpg)`}}>
  <nav id="navbar">
    <ul>
      <li className="item"><a href="/">Home</a></li>
      <li className="item"><a href="/register">Register As A Professional</a></li>
      <li className="item"><a href="/contact">Contact Us</a></li>
      <li className="item"><a href="#">Help</a></li>
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
              <div className="eye-area1">
                <div className="eye-box1" onclick="Login()">
                  <i className="fa-regular fa-eye" id="eye1"></i>
                  <i className="fa-regular fa-eye-slash" id="eye-slash"></i>
                </div>
              </div>
            </div>
            </div>
            <div className="remember1">
              <input type="checkbox" id="formCheck" className="check"/>
              <label htmlFor="formCheck"> Remember Password</label>
            </div>
            <div className="input2-field">
              <input type="submit" className="input-submit" value="Sign In"/>
            </div>
            <div className="text-center">
              
              <p>Not a member? <a href="/signup">Register</a></p>
        
              <div className="forgot">
                <a href="signup">Forgot password?</a>
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
