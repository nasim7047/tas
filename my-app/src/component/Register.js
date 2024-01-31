import React from 'react'
import '../CSS/regcss.css'
import { Link } from 'react-router-dom';

export default function Signup() {

    function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value === pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
} 
  return (
    <>

<body style={{backgroundImage: `url(/images/tech.jpg)`}}>
  <nav id="navbar">
    <ul>
      <li className="item"><Link to="/">Home</Link></li>
      <li className="item"><Link to="/register">Register As A Professional</Link></li>
      <li className="item"><Link to="/contact">Contact Us</Link></li>
      <li className="item"><Link to="/contact">Help</Link></li>
    </ul>
  </nav>

  <div className="container">
    <div className="box3">
      
      <div className="box-register" id="register">
        <div className="top-header">
          <h2>Register Now</h2>
        </div>
        <form action="" method="post">
          {/* {% csrf_token %} */}
          <div className="input3-group">
          <div className="input3-field">
                <input type="text" name="name" className="input3-box" id="name" required/>
                <label htmlFor="name">Full Name </label>
            </div>
            
            <div className="input3-field">
                <input type="text" name="email" className="input3-box" id="email" required/>
                <label htmlFor="email">Email </label>
            </div>

            <div className="input3-field">
                <input type="number" name="phone" className="input3-box" id="phone" required/>
                <label htmlFor="mobile">Mobile number </label>
            </div>
            <div className="input3-field">
                <input type="text" name="address" className="input3-box" id="email" required/>
                <label htmlFor="address">Full Address </label>
            </div>
            <div className="input3-field">
                <input type="text" name="Experience" className="input3-box" id="email" required/>
                <label htmlFor="Experience">Work Experience </label>
            </div>


            <div className="input-field">
                <input type="password" name="email" className="input3-box" id="password" required/>
                <label htmlFor="password">Password </label>
            </div>
                <div className="input-field">
                    <input type="password" name="password" className="input3-box" id="Cpassword" required/>
                    <label htmlFor="cpassword">Retype Password</label>
              <div className="eye-area">
                <div className="eye-box" onclick="Login()">
                  <i className="fa-regular fa-eye" id="eye"></i>
                  <i className="fa-regular fa-eye-slash" id="eye-slash"></i>
                </div>
              </div>
            </div>
            </div>
            <div className="remember">
              <input type="checkbox" id="formCheck" className="check"/>
              <label htmlFor="formCheck"> Remember Password</label>
            </div>
            <div className="input3-field">
              <input type="submit" className="input-submit" value="Sign In"/>
            </div>
            <div className="text-center">
              
              <p id='ad'>Already have account <Link to="/prologin">Login</Link></p>
        
              {/* <div className="forgot">
                <Link to="signup">Forgot password?</Link>
              </div> */}
            </div>
        </form>
      </div>
    </div>
    </div>
    </body>

      
    </>
  )
}
