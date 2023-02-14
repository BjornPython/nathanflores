import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import gmail from "../svgs/gmail.svg"
function ContactInfo() {

    const handleEmailCLick = () => {
        window.open("mailto:nathanflores887@gmail.com")
    }

    return (
        <div className='contact-info-div'>
            <h2>contactMe</h2>

            <div className="contact "  >
                <img className="contact-email" src={gmail} onClick={handleEmailCLick} />
                <p>nathanflores887@gmail.com</p>
            </div>
            <div className="contact">
                <FontAwesomeIcon icon={faPhone} className="contact-icons" />
                <p>+63 949 340 5687</p>
            </div>

        </div>
    )
}

export default ContactInfo