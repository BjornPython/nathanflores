import React from 'react'

function ContactForms() {
    const handleSubmit = () => {

    }
    return (
        <div className='contact-forms-div'>
            <div className='name-email'>
                <h3>name</h3>
                <input type="text" />
                <h3>email</h3>
                <input type="text" />
            </div>

            <textarea id="message" name="" cols="30" rows="10" placeholder='Your mesage...'></textarea>

            <div onClick={handleSubmit}>

            </div>

        </div>
    )
}

export default ContactForms