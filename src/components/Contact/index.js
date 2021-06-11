import React, { useState } from 'react';


function ContactForm() {
    //Hook that'll manage the form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    // handleChange function will sync the internal state of the component formState with the user input from the DOM. The onChange 
    //event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name.
    function handleChange(e) {
        //assign the value taken from the input field in the UI with e.target.value 
        setFormState({ ...formState, [e.target.name]: e.target.value})
    }
    //add a console log outside to check if it works
    // console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact=form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm