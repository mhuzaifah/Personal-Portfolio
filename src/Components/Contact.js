import React, {useRef} from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser";

function Contact() {

    const refForm = useRef();

    const sendEmail = (e) => {

        e.preventDefault()

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again")
                }
            )

    }

    return (
        <div className="contactContainer" >
            <div className="contactText" style={{fontSize:'2em'}} >Thanks for your interest in getting in touch!</div>
            <div className="contactText" style={{width:'80%', fontSize:'1.15em'}} >I’m always eager to hear from you, whether it’s a question, feedback, potential collaboration, or even just to make a new friend. Please feel free to reach out by filling out the form below. I look forward to hearing from you and will get back to you as soon as possible.</div>
            <div style={{display:'flex', width: '100%', justifyContent:'space-around'}} >
                <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/muhammadhuzaifahswe/" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <FaLinkedin className="contactImage"  style={{fontSize:'15em'}} />
                </a>
                <div className='submissionContainer' onSubmit={sendEmail} >
                    <form ref={refForm}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" required></textarea>
                        </div>
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <a target = "_blank" rel = "noreferrer" href = "mailto:mhuzaifah989@gmail.com" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <IoMdMail className="contactImage"  style={{fontSize:'15em'}} />
                </a>
            </div>
        </div>
    )

}

export default Contact;