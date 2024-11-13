import React from 'react'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
        <div className='container pt-5'>
                <h1 className='font-bold text-3xl px-12'>Contact <span className='text-primary'>US</span></h1>
                <div className='flex flex-col-reverse justify-center md:flex-row gap-5 mt-5'>
                    {/* content section */}
                    <div className='w-full md:w-2/4  space-y-5'>
                        <div>
                            <h1 className='text-lg font-bold'>CALL US :</h1>
                            <Link><p className='text-sm text-primary'> 1800 209 6006</p></Link>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>EMAIL US :</h1>
                            <Link><p className='text-sm text-primary'>autoportal@gmail.com</p></Link>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Corporate Office Address :</h1>
                            <p className='text-sm'>Auto Portal Private Limited</p>
                            <p className='text-sm'>Tower B, 4th Floor, Pride Sapphire,</p>
                            <p className='text-sm'>Near Amin Marg, Rajkot, Gujarat 360001</p>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8220962507935!2d70.77928117447152!3d22.284727943461256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb863e42b9c1%3A0xea05dc79b2be1f36!2sPride%20Sapphire!5e0!3m2!1sen!2sin!4v1725922035556!5m2!1sen!2sin"
                                width={600}
                                height={250}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>

                    {/* img section */}
                    <div className='w-full md:w-2/5'>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ContactUs
