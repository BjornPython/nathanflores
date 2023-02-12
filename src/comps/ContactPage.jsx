import React from 'react'
import "../css/contactPage.css"
import RoundedComponent from './RoundedComponent'
import ContactForms from './ContactForms'
function ContactPage() {
    return (
        <div className='contact-page'>

            <div className="contact-contents">
                <div className="contact-div">
                    <RoundedComponent content={<ContactForms />} frontCompClass="contact-forms" backCompClass="back-contact-forms" />
                </div>
                <h1>or</h1>
                <div className="contact-me">
                    <h1>contact</h1>

                </div>
            </div>
        </div>
    )
}

export default ContactPage