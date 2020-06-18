import React, { Component } from 'react';



class Contact extends Component {
  render() {
    return(
      <div className="contact-banner">
        <h1>Contact Me </h1>

        <hr/>

        <div className="contactinfo">
          <div>
            <img
              src="./img/phone3.png"
            />
            <p>0730395854</p>
          </div>
          <div>
            <img
              src="./img/phone3.png"
            />
            <p>0672063229</p>
          </div>
          
          <div>
          <img
              src="./img/email13.png"
            />
            <p>kgauza.mpe@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }
}
      
    
export default Contact;