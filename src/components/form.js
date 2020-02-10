import React from "react"
import "./form.css"

export default () => {
    return (
        <div className='formWrapper'>
        
          <div className='contactCta'>
              <h1 id='ctaTitle'>LET'S TALK</h1>
              <p className='ctaBody'>Trevor and I would love to get to know you and take your photos. Whether it be wedding, elopement, engagement, or a portrait session. Please fill out the form below for availability and pricing info! We are always down to meet for coffee or talk on the phone. We will get back to you within 48 hours.</p>
          </div>
  
  
          <form name='inquiry' method='POST' className='contactForm' netlify="true" >
          <input type="hidden" name="inquiry" value="inquiry" />
              <h4 className='formTitle'>say hello</h4>
    
                  <label>full name*<input id='f1' type='text' name='name' required/></label>
                  <label>significant others' name (if applicable)<input id='f2' type='text' name='spouses name' /></label>
                  <label>type of event*<input id='f3' type='text' name='event type' required/></label>
                  <label>date<input id='f4' type='date'/></label>

                  <label>tell us more about you!*<textarea id='f5' id='moreAbout' name='more about' required></textarea></label>
                  <label>email address*<input id='f6' type='email' name='address' required/></label>
                  <label>how did you hear about us?!<input id='f7' type='text' name='how did you hear?' /></label>
                  <button id='f8' type='submit' className='submitForm'>submit!</button>
           
          </form>

{/* ===================================================================== */}
{/* 
          <form name="contact" method="POST" netlify="true">
          <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="address" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> */}

        </div>
    )
}