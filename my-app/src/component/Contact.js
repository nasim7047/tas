import React from 'react'
import '../CSS/cn.css'
export default function Contact() {
  return (
    <>

<body>
  <h1>Contact Us.....</h1>

  <div class="contact-info">
    <p><span>Phone:</span> +91-9564158994</p>
    <p><span>Email:</span> srs.nasim@gmail.com</p>
    <p><span>Address:</span> Kolkata, West-Bengal, INDIA</p>
  </div>

  <div class="contact-form">
    <div>
          <i>We are offering a variety of services at home. Please contact us to book services such as beauty <br /> treatments,
            haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting etc..</i>
          <br/>
          <br/>
          <br/>
        <div class="note">
      <h3>Drop a note...</h3>
      <form action="/send" method="post">
        <label for="message" id="lable">Enter your message:</label>
        <textarea id="message" name="message" placeholder="Write something" rows="4" cols="50"></textarea>
        <button>Send</button>
      </form>

    </div>
  </div>
  </div>
</body>



    </>
  )
}
