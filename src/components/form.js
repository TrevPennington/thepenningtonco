import React from "react"
import "./form.css"

export default () => {
    return (
        <div className='formWrapper'>
        
          <div className='contactCta'>
              <h1 id='ctaTitle'>LET'S TALK</h1>
              <p className='ctaBody'>Trevor and I would love to get to know you and take your photos. Whether it be wedding, elopement, engagement, or a portrait session. Please fill out the form below for availability and pricing info! We are always down to meet for coffee or talk on the phone. We will get back to you within 48 hours.</p>
          </div>
  
  
          <form className='contactForm' data-netlify="true">
              <h4 className='formTitle'>say hello</h4>
              <div className='groupOne'>
                  <input id='f1' type='text' placeholder='first name*' required/>
                  <input id='f2' type='text' placeholder='last name*' required/>
                  <input id='f3' type='text' placeholder='type of event*' required/>
                  <input id='f4' type='date' placeholder='date' />
              </div>
              <div className='groupTwo'>
                  <textarea id='f5' id='moreAbout' placeholder='tell us more about you!*' required></textarea>
                  <input id='f6' type='email' placeholder='your email address*' required/>
                  <input id='f7' type='text' placeholder='how did you hear about us?!' />
                  <button id='f8' type='submit' className='submitForm'>submit!</button>
              </div>
          </form>

        </div>
    )
}