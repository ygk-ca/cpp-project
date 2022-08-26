import React from 'react'
import ExpLearning from '../../assets/exp-learning.png'
import {useNavigate} from 'react-router-dom';
 
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

    const navigate = useNavigate();
 
    fetch('/api/sendmail', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state),
        headers: {'Content-Type': 'application/json'},
      }).then(function(response) {
        console.log(response)
        return response.json();
      })

      
}
 
  render() {
    return (
        <div class="wrapper">
            <div class="company-info">
                <img src={ExpLearning} height="200"/>
                <ul className="contact-ul">  
                    <li className="contact-li-msg">Get in touch!</li>                  
                    <br></br>
                    <li className="contact-li">94 University Avenue</li>
                    <li className="contact-li">613-533-2992</li>
                    <li className="contact-li">asc.el@queensu.ca</li>
                </ul>
                <a href="/"><button style={{backgroundColor: "#b90e31"}}className="btn">Back to Home</button></a>
            </div>


            <div class="contact">
                <div className="contact-title">Contact Us</div>
                <form id="contact-form" onSubmit={this.handleSubmit}>

                    <p>
                        <label>Full Name</label>
                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} required/>
                    </p>

                    <p>
                        <label>Course</label>
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
                        <textarea placeholder="Describe how we can help you (meeting, document request, etc...)!" name="message" rows="5" id="message" type="text" value={this.state.message} onChange={this.handleChange} required/>
                    </p>

                    <p class="full">
                        <button type="submit">Submit</button>
                    </p>

                </form>
            </div>
	</div>
        
    );
  }
}
 
export default ContactForm;
