import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "252a7e79-72c4-4bd1-ab47-fc4088317bf0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <div className='contact'>
            <div className='contact-info'>
                <h3>Send us a message <img src={message_icon} alt=""/> </h3>
                <p>Feel fre to reach out throught concat,
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit laborum facere vero, nobis harum eos.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus!
                </p>
                <ul>
                    <li><MdEmail style={{ marginRight:'10px',color:' #4481eb' }}  />Email:test@gmail.com</li>
                    <li><FaPhoneSquareAlt style={{marginRight:'10px',color:' #4481eb' }}  />+381 69345672</li>
                    <li><FaLocationDot style={{ marginRight:'10px',marginBottom: '20px',color:' #4481eb' }} />Adresa:Prishtine <br/>Kosovo</li>
                </ul>
            </div>
            <div className='contact-form'>
                <form onSubmit={onSubmit}>
                    <span className="circle one"></span>
                    <span className="circle two"></span>
                    <label>Name:</label>
                    <input type="text" name='name' placeholder='Enter your name..' required/>
                    <label>Phone number:</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number..' required/>
                    <label>Message:</label>
                    <textarea name="message" rows="7" placeholder='Enter your message..' required></textarea>
                    <button type='submit' className='btn color-1 form'>Send now!</button>
                </form>
                <span>{result}</span>

            </div>


        </div>
    )
}

export default Contact