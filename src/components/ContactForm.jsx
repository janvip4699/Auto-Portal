import axios from 'axios'
import React, { useRef } from 'react'
import Swal from 'sweetalert2';

const ContactForm = () => {

    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const phone = useRef();
    const message = useRef();

    const addContactData = (e) => {
        e.preventDefault();

        var ins = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            phone: phone.current.value,
            message: message.current.value,
        }

        axios.post(`http://localhost:4000/contact-us`, ins).then(() => {
            Swal.fire({
                title: "Thank you for contacting us! We'll get back to you soon!!",
                showClass: {
                    popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                },
                hideClass: {
                    popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                }
            });
            e.target.reset();
        });

    }

    return (
        <div>
            <form onSubmit={addContactData}>
                <div className="border-2 px-4 py-4">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 md:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        ref={firstname}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        ref={lastname}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        ref={email}
                                    />
                                </div>

                                <div className="sm:col-span-6">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6  text-gray-900 mt-2">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            autoComplete="phone"
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            ref={phone}
                                        />
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 mt-2">
                                            Message
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={3}
                                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                                defaultValue={''}
                                                ref={message}
                                            />
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Put your concern here..!!</p>
                                    </div>

                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default ContactForm
