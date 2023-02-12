import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
function ContactForms() {

    const [formsValues, setFormsValues] = useState({ name: "", email: "", message: "" })
    const { name, email, message } = formsValues

    const handleSubmit = () => {
        console.log(formsValues);
    }

    const handleChange = (e) => {
        setFormsValues(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    return (
        <div className='contact-forms-div'>
            <div className='name-email'>
                <h3>name</h3>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <h3>email</h3>
                <input type="text" name='email' value={email} onChange={handleChange} />

            </div>

            <textarea id="message" name="message" cols="30" rows="10" placeholder='Your mesage...' value={message} onChange={handleChange}  ></textarea>

            <div onClick={handleSubmit} className="submit-btn">
                <h3>sendMessage()</h3>

            </div>

        </div>
    )
}

export default ContactForms