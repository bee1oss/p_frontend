import React from 'react'

function Contact() {
  return (
    <section id="contact">
    <h2>Contact Me</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </section>
  )
}

export default Contact
