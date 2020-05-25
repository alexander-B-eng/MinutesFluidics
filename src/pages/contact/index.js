import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import ContactForm from '../../components/ContactForm'
import '../../scss/components/_ContactForm.scss'

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        
      </div>

      <p>  </p>
      
      {/* test form out */}
        <ContactForm></ContactForm>

      
    </div>
    





  </Layout>
);

export default Contact;
