import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
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
                            <label htmlFor="name">Name: </label>
                            <input type="text" defaultValue={formState.name} name="name" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email address: </label>
                            <input type="email" defaultValue={formState.email} name="email" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message: </label>
                            <textarea name="message" defaultValue={formState.message} onChange={handleChange} rows="5" />
                        </div>
                        <button type="submit" onSubmit={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;