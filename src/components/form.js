import React from "react"
import "./form.css"
import { useStaticQuery, graphql } from "gatsby"

export default () => {

  function confirmationAlert() {
    alert("Thank you for contacting us, we will respond as soon as we can!")
  }

  const helloCopy1 = "Whether we're photographing an engagement, wedding, couple session, etc., Trevor and I always put our heart and soul into capturing photographs you will cherish forever."
  const helloCopy2 = "One of our favorite parts about photographing is creating relationships with our couples, not just being your photographers - but your friends! We strive to make our couples feel appreciated and comfortable. We understand the trust you put in your photographers hands to capture the sweet moments that go by way too fast."
  const helloCopy3 = "Couples who are open for making your photo session an adventure, let's hang out! When photographing we love to capture unique, fun, silly, raw, and romantic moments. Our goal is to reflect the couple's personality and love through simple photographs."
  const helloCopy4 = "If you love our work, let's grab some coffee and get to know each other!"

  const bucketCopy1 = "We love seeing new places! - so if you give us an opportunity to visit a place on our bucket list, we will be sure to give you a thanks by discounting the package you decide on! Bucket list: Canada, Europe, New England, PNW, Arizona/Utah. We are always open to hear other ideas!"

    return (
      <div>
        <div className='formWrapper'>


          <div className='contactCta bordered'>

              <h1 id='ctaTitle'>LET'S TALK!</h1>
              <p className='ctaBody'>
                {helloCopy1}<br /><br />
                {helloCopy2}<br /><br />
                {helloCopy3}<br /><br />
                {helloCopy4}<br /><br />
              </p>

              <div className='bucketListFullWrapper'>

                <h1 id='bucketTitle'>BUCKET LIST</h1>
                <p className='ctaBody'>
                  {bucketCopy1}
                </p>

              </div>
          </div>


  

          {/* TODO : add a success page, like Squarepatch */}
          <form name='inquiry' method='POST' className='contactForm' data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={confirmationAlert}>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="inquiry" />
                  
                  <h4 className='formTitle'>SAY HELLO</h4>
    
                  <input id='f1' className="formField" type='text' name='name' required 
                    placeholder="full name*"/>

                  <input id='f2' className="formField" type='text' name="significant others' name (if applicable)" 
                    placeholder="significant others' name (if applicable)" />
                  
                  <input id='f3' className="formField" type='text' name='event type' required
                    placeholder="what would you like photographed?*"/>
                  
                  <input id='f3' className="formField" type='text' name='location' required
                    placeholder="location/venue*"/>

                  <input id='f4' className="formField" type='text' name='date' required placeholder='date*' />

                  <textarea id='f5' className="formField" id='moreAbout' name='more about' required
                    placeholder="tell us more about you!*"></textarea>

                  <input id='f6' className="formField" type='email' name='address' required 
                    placeholder="email address*"/>

                  <input id='f7' className="formField" type='text' name='how did you hear?'
                    placeholder="how did you hear about us?!"/>

                  <button id='f8' className="formField" type='submit' className='submitForm'>
                    submit!</button>
           
          </form>

        </div>

          <div className='bucketListMobileWrapper'>

            <h1 id='ctaTitle'>BUCKET LIST</h1>
            <p className='ctaBody'>
              {bucketCopy1}
            </p>
          </div>

      </div>

        
    )
}