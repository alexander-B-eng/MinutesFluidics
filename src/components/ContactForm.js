import React from 'react'

class ContactForm extends React.Component {

  render() {
    const formStyle = {
      textAlign: 'left'
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center',
    }
    return (
      <div className="two-grids -contact">
      <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
        <h1 className="post-title">Get in Touch</h1>
        {/* <p>Let me help you kick start your next project &rarr;</p> */}
      </div>
      <div>
        <form className="form-container" action="https://getform.io/f/a6907d74-5a31-435a-8dc0-4a805e5641bc" method="post">
          <div>
            <label htmlFor="w3lName">Name</label>
            <input type="text" name="w3lName" id="w3lName"/>
          </div>
          <div>
            <label htmlFor="w3lSender">Email</label>
            <input type="email" name="w3lSender" id="w3lSender"/>
          </div>
          <div>
            <label htmlFor="w3lSubject">Subject</label>
            <input type="text" name="w3lSubject" id="w3lSubject"/>
          </div>
          <div>
            <label htmlFor="w3lMessage">Message</label>
            <textarea name="w3lMessage" id="w3lMessage"></textarea>
          </div>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <input type="submit" className="button -primary" style={{marginRight: 0}} />
          </div>
        </form>
      </div>
    </div>

    );
  }
}

export default ContactForm