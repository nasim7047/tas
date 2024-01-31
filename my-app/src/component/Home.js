import React from 'react'
import '../CSS/style.css'
import { Link } from 'react-router-dom'
export default function home() {
  return (
    <>
      <body>

<nav id="navbar">
    <ul>
        <li class="item"><Link to="/#home">Home</Link></li>
        {/* <li class="item"><Link to="/#services-container">Services</Link></li> */}
        <li class="item"><Link to="/register">Register as a Professional</Link></li>
        <li class="item"><Link to="/prologin">Professional Login</Link></li> 
        <li class="item"><Link to="/contact">Contact Us</Link></li>
  
    </ul>

    <div class="split">
        <div class="link-1">
            <a href="login"><button type="button"><span>Login</span></button></a>
        </div>
        <div class="link-2">
            <a href="signup"><button type="button"><span>Sign up</span></button></a>
        </div>
    </div>
</nav>
   
{/* 
<div class="banner" style={{ backgroundImage: `url(/images/tech.avif)`,
          height: '1000px'}}
       ></div> */}


<section id="home1">
    <h2 class="h-primary">Home Services, On Demand</h2>

</section>

<section id="services-container">
    <h2 class="h-primary center">Our Services</h2>
    
    <div id="services">
        <div class="hbox">
            <img src="/images/1.jpg" alt=""/>
            <h2 class="h-secondary center">Hair cutting</h2>
            <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h6 class="h-secondary center">Rs.800</h6>
        </div>
        <div class="hbox">
            <img src="/images/2.jpg" alt=""/>
            <h2 class="h-secondary center">Kitchen Cleaning</h2>
            <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h6 class="h-secondary center">Rs.700</h6>
        </div>
        <div class="hbox" id="hbox3">
            <img src="/images/3.jpg" alt=""/>
            <h2 class="h-secondary center">Home cleaning</h2>
            <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <h6 class="h-secondary center">Rs.1500</h6>
        </div>
        <div class="hbox" id="hbox3">
            <img src="/images/c.jpg" alt=""/>
            <h2 class="h-secondary center">Bathroom cleaning</h2>
            <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <h6 class="h-secondary center">Rs.800</h6>
        </div>

    </div>
    <a href="../services"><button type="button" class="btn btn-primary btn-lg btn-block">Book Your
            Service</button></a>
</section>



<footer class="section-p1">
    <div class="col">
        <h4>Contact</h4>
        <p><strong>Address:</strong> Kolkata, West-Bengal, INDIA</p>
        <p><strong>Phone:</strong> +91 0000 000 00</p>
        <p><strong>Hours:</strong> 24*7, Mon - Sun</p>
        <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Contact Us</a>
    </div>
    <div class="col">
        <h4>My account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">Help</a>
    </div>
    <div class="col install">
        <h4>Install</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
            <img src="/images/app.jpg" alt=""/>
            <img src="/images/play.jpg" alt=""/>
        </div>
        <p>Secured Payment Gateway</p>
        <img src="/images/pay.png" alt=""/>
    </div>
    <div class="copyright">
        <p>© 2014-23 HTML CSS India Pvt. Ltd.</p>
    </div>
</footer>
</body>
    </>
  )
}



