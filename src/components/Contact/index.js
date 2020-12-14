import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('requires a valid email');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formState);
    }

    return (
        <div id="content">
            <div class="post-container">
                <div class="post">
                    <div class="post-author">
                        <h1>Contact me</h1>
                    </div>
                    <form id="contact-form">
                        <div>
                            <label htmlFor="name">Name:</label><br></br>
                            <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div >
                            <label htmlFor="email">Email Address:</label><br></br>
                            <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label><br></br>
                            <textarea className="form-control textmessage" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}

                        <div>
                            <button data-testid='button' className="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
