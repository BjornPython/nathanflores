import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import { useEffect } from 'react'


function ContactForms() {

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [formsValues, setFormsValues] = useState({ name: "", email: "", message: "" })
    const { name, email, message } = formsValues


    useEffect(() => {
        let timeoutId;

        if (showError) {
            // Set a new timer to set the "showError" state to false after 3 seconds
            timeoutId = setTimeout(() => {
                setError(false);
            }, 3000);
        }

        // Clean up the previous timer (if any) when the component unmounts or the "showError" state changes
        return () => {
            clearTimeout(timeoutId);
        };
    }, [error]);


    const handleSubmit = () => {
        console.log(formsValues);
        if (email === "" || name === "" || message === "") {

            showError()
            setErrorMsg(<h3 style={{ color: "red" }}>Please Fill All Fields</h3>)
        } else {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, formsValues, PUBLICK_KEY)
                .then((result) => {
                    console.log(result.text);
                    resetForms()
                    showError()
                    setErrorMsg(<h3 style={{ color: "green" }}>Message Sent Succesfully!</h3>)
                }, (error) => {
                    console.log(error.text);
                    showError()
                    setErrorMsg(<h3 style={{ color: "red" }}>{error.text}</h3>)
                });
        }

    };

    const resetForms = () => {
        setFormsValues({ name: "", email: "", message: "" })
    }

    const showError = () => {
        setError(true)
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
            {error &&
                <div className='forms-err-msg'>
                    {errorMsg}
                </div>
            }

        </div>
    )
}

export default ContactForms
