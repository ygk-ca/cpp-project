import React from "react";

const ContactForm = () => {
    return (
        <div className="contact-form">
            <form action="https://formsubmit.co/vs61@queensu.ca" method="POST">
                <input type="text" name="name" placeholder="Name" required></input>
                <input type="email" name="email" placeholder="Email Address" required></input>
                <input type="text" name="message" placeholder="Message" required></input>
                <input type="hidden" name="_next" target="_blank"></input>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactForm