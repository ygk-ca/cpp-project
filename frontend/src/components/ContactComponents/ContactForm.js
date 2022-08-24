import React from 'react'
 
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        email: '',
        phone: '',
        message: '',
    };
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('Your email was sent!');
 
    fetch('/api/sendmail', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state),
        headers: {'Content-Type': 'application/json'},
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
        <div className="contact-page-body">
            <form onSubmit={this.handleSubmit}>
                <div className="contact-form-container">
                    <label>
                        Name:
                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Phone:
                        <input type="text" value={this.state.phone} name="phone" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Message:
                        <textarea type="text" value={this.state.message} name="message" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
                
            </form>
        </div>
        // <div className="contact-page-body">
        //     <div class="wrapper">
        //         <h2>CONTACT US</h2>
        //         <form onSubmit={this.handleSubmit}>
        //             <div className="contact-form-container">
        //                 <label>
        //                     Name:
        //                     <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
        //                 </label>

        //                 <label>
        //                     Message:
        //                     <textarea type="text" value={this.state.message} name="message" onChange={this.handleChange} />
        //                 </label>
        //                 <input type="submit" value="Submit" />
        //             </div>
                
        //      </form>
        //     </div>
        // </div>
        
    );
  }
}
 
export default ContactForm;






{/* <form action="https://formsubmit.co/asc.el@queensu.ca" method="POST">
                <h1>Contact Us</h1>
                <p style={{padding: "15px"}}>Do you want assistance in coordinating a community partnership for your course, update/add to the resources on this website or just talk through options for embedding the SDGs into your curriculum?  Fill out the contact form and we’ll get back in touch, usually the same day! </p>

                    <div class="column">
                        <label for="the-name">Your Name</label>
                        <input type="text" name="name" id="the-name" required/>

                        <label for="the-email">Email Address</label>
                        <input type="email" name="email" id="the-email" required/>

                        <label for="the-phone">Phone Number</label>
                        <input type="tel" name="phone" id="the-phone"/>

                        <label for="the-reason">How can we help you?</label>
                        <select name="reason" id="the-reason" required>
                            <option value="new-project">I need a new project</option>
                            <option value="project-update">I need a project updated</option>
                            <option value="other">Other inquiry</option>
                        </select>
                    </div>
                    <div class="column">
                        <label for="the-message">Message</label>
                        <textarea name="message" id="the-message"></textarea>
                        <input type="submit" value="Send Message" required/>
                    </div>
                </form> */}