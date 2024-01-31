import React from 'react'
import '../CSS/css.css'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>

<body>

<nav id="navbar">
    <ul>
        <li className="item"><Link to="/">Home</Link></li>
        <li className="item"><Link to="#services-container">Services</Link></li>
        <li className="item"><Link to="register">Register as a Professional</Link></li>
        <li className="item"><Link to="contact">Contact Us</Link></li>
    </ul>
</nav>


<section className="vh-100" style={{backgroundColor: `#eee`}}>

    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: `25px`}}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Select Service</p>

                                <form action="Thankyou"  id="fileForm" role="form">
                                    

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" for="form3Example1c">Your Name</label>
                                            <input type="text" name="name" id="form3Example1c" required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" for="form3Example3c">Your Email</label>
                                            <input type="email" name="email" id="form3Example3c"required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" for="form3Example3c">Address</label>
                                            <input type="text" name="address" id="form3Example3c"required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" for="form3Example3c">Mobile</label>
                                            <input type="number" name="phone" id="form3Example3c"
                                                className="form-control" />
                                        </div>
                                    </div>


                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" for="form3Example3c"required name="services">Choose a service:
                                            </label>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <select className="form-select form-select-lg mb-3"
                                                        aria-label=".form-select-lg example" name="service">
                                                        <option value="" required>--Select your service--</option>
                                                        <option value="hair">Hair Cutting and Services</option>
                                                        <option value="kitchen">Kitchen cleaning</option>
                                                        <option value="home">Home cleaning</option>
                                                        <option value="bathroom">Bathroom Cleaning</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2" type="checkbox" value=""
                                            id="form2Example3c" />
                                        <label className="form-check-label" for="form2Example3">
                                            I agree all statements in <Link to="#!">Terms of service</Link>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <input type="submit" className="btn btn-primary btn-lg" value="Book Now"/>
                                        
                                    </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="/images/draw1.webp"
                                    className="img-fluid" alt="Sample"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</body>
      
    </>
  )
}
