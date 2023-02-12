import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
function ContactInfo() {
    return (
        <div className='contact-info-div'>
            <h2>contactMe</h2>

            <div className="contact">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icons" />
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