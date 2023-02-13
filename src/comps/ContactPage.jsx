import React from 'react'
import "../css/contactPage.css"
import RoundedComponent from './RoundedComponent'
import ContactForms from './ContactForms'
import ContactInfo from './ContactInfo'

function ContactPage() {



    return (
        <div className='contact-page'>

            <div className="contact-contents">
                <div className="contact-div hidden">
                    <RoundedComponent content={<ContactForms />} frontCompClass="contact-forms" backCompClass="back-contact-forms" />
                </div>
                <h1>or</h1>
                <div className="contact-me hidden">
                    <RoundedComponent content={<ContactInfo />} frontCompClass="contact-info" backCompClass="back-contact-info" />
                    <h4>downloadCv()</h4>
                </div>
            </div>
        </div>
    )
}

export default ContactPage