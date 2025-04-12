import React from 'react'

function Contact() {
  return (
    <section id="contact">
    <h2>Contact Me</h2>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </section>
  )
}

export default Contact
