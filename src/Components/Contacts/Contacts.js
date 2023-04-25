import React, { useState } from 'react'
import './Contacts.css';
import { Element, Link } from 'react-scroll';
import axios from 'axios';


const Contacts = () => {

  const [Input,SetInput] = useState({
    email:"",
    name:"",
    message:""
  }); 

  const SubmitHandler = async (e)=>{
      e.preventDefault();
      console.log(Input);
      const response = await axios.post("https://portfolio-backend-f98a.onrender.com/register",{
        name:Input.name,
        email :Input.email,
        message :Input.message
      });
     
      console.log(response); 
  }


  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Book.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Book.pdf';
            alink.click();
        })
    })
}

  return (
    <Element className='contactPage' id='Contact'>
        <div className='container'>
          <div className='row'>
            <div className='contact-left'>
                <h1 className='sub-title-contact'>Contact Me</h1>
                <p> <i class="fa-regular fa-envelope"></i> msaravanakumar369@gmail.com</p>
                <p><i class="fa-solid fa-phone-flip"></i> 7010505920</p>
                <div className='social-media-links'>
                    <a href=''><i class="fa-brands fa-github"></i></a>
                    <a href=''> <i class="fa-brands fa-linkedin-in"></i></a>
                    <a href=''><i class="fa-duotone fa-envelope"></i></a>
                </div>
                <button  className='btn btn2' value="download" onClick={onButtonClick}>DownLoad CV</button>
            </div>
            <div className='contact-Right'>
                <form  onSubmit={SubmitHandler}> 
                    <input type='text' name='Name' placeholder='Your Name' required onChange={(e)=>SetInput({...Input,name:e.target.value})} value={Input.name}/>
                    <input type='email' name='Email' placeholder='Your Email' required onChange={(e)=>SetInput({...Input, email:e.target.value})} value={Input. email}/>
                    <textarea name='Message' rows='6' placeholder='Your Message'onChange={(e)=>SetInput({...Input,message:e.target.value})} value={Input.message}></textarea>
                    <button className='btn btn2' type='submit'>Submit</button>
                </form>
              </div>
          </div>

        </div>
        <div className="arrow">
        <Link to="Home" spy={true} smooth={true} offset={-100} duration={250}>
        <i class="fa-solid fa-arrow-up fa-beat-fade fa-2xl"></i>
        </Link>
      </div>
        <div className='copyright'>
          <p>Copyright © SaravanaKumar</p>
        </div>
    </Element>
  )
}

export default Contacts;