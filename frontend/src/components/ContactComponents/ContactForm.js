import React from 'react'
import ExpLearning from '../../assets/exp-learning.png'
 
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        email: '',
        course: '',
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
}
 
  render() {
    return (
        // <div className="contact-page-body">
        //     <form onSubmit={this.handleSubmit}>
        //         <div className="contact-form-container">
        //             <div className="contact-form-header">
        //                 <h2>Contact Us</h2>
        //                 <div className="contact-header-para">
        //                     <p>Do you want assistance in coordinating a community partnership for your course, update/add to the resources on this website or just talk through options for embedding the SDGs into your curriculum?  Fill out the contact form and we’ll get back in touch, usually the same day! </p>
        //                 </div>
        //             </div>

        //             <div className="contact-form">
        //                 <label>
        //                     Name:
        //                     <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
        //                 </label>
        //                 <label>
        //                     Email:
        //                     <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
        //                 </label>
        //                 <label>
        //                     Phone:
        //                     <input type="text" value={this.state.phone} name="phone" onChange={this.handleChange}/>
        //                 </label>
        //                 <label>
        //                     Message:  
        //                 </label>
        //                 <textarea cols="5" type="text" value={this.state.message} name="message" onChange={this.handleChange} />
        //                 <input type="submit" value="Submit" />
        //             </div>
                    
        //         </div>
                
        //     </form>
        // </div>
        <div class="wrapper">
            <div class="company-info">
                <img src={ExpLearning} height="200"/>
                <ul className="contact-ul">  
                    <li className="contact-li-msg">Leave us a message!</li>                  
                    <br></br>
                    <li className="contact-li">94 University Avenue</li>
                    <li className="contact-li">613-533-2992</li>
                    <li className="contact-li">asc.el@queensu.ca</li>
                </ul>
            </div>


            <div class="contact">
                <div className="contact-title">Contact Us</div>
                <form id="contact-form" onSubmit={this.handleSubmit}>

                    <p>
                        <label>Full Name</label>
                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} required/>
                    </p>

                    <p>
                        <label>Course Code</label>
                        <input placeholder="optional" type="text" name="course" onChange={this.handleChange} />
                    </p>

                    <p>
                        <label>E-mail Address</label>
                        <input type="text" value={this.state.email} name="email" onChange={this.handleChange} required/>
                    </p>

                    <p>
                        <label>Phone Number</label>
                        <input placeholder="optional" type="text" value={this.state.phone} name="phone" onChange={this.handleChange}/>
                    </p>

                    <p class="full">
                        <label>Message</label>
                        <textarea placeholder="Describe your concern so we can help you out!" name="message" rows="5" id="message" type="text" value={this.state.message} onChange={this.handleChange} required/>
                    </p>

                    <p class="full">
                        <button type="submit">Submit</button>
                    </p>

                </form>
            </div>
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