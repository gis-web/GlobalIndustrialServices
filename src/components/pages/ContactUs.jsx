import React from 'react'
import ContactForm from '../form'
import Navbar from '../Navbar'
import Footer from '../footer'

const ContactUs = () => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-red-200 to-white'>
      <Navbar />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default ContactUs