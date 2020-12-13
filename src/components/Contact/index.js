import React, { useState } from 'react';

function ContactForm() {
    const [formstate, setFormState] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setFormState({...formstate, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formState);
    }

    return (
        <section>
        <h1>Contact me</h1>
        <form id="contact-form">
          <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={formState.name} name="name" onChange={handleChange} />
          </div>
          <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={formState.email} name="email" onChange={handleChange}/>
          </div>
          <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={formState.message} onChange={handleChange} rows="5"  />
          </div>
          {errorMessage && (
          <div>
              <p className="error-text">{errorMessage}</p>
          </div>
          )}
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
      </section>
    );
}

export default Contact;