import React from "react";

const ContactForm = () => {
    return (
        <section className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{fontFamily: "Inter"}}>
                    Contact Me
                </h2>
                <p className="text-gray-600" style={{fontFamily: "Inter"}}>
                    Have a project in mind or just want to say hi? Feel free to reach out.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Form */}
                <div className="lg:w-2/3">
                    <form className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="sm:w-1/2">
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="sm:w-1/2">
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div className="text-left">
                            <button type="submit"
                                    className="relative text-white text-center font-inter text-[17px] font-semibold leading-normal py-3 px-8 rounded-full bg-black w-auto h-auto group">
                                <div
                                    className="absolute inset-0 border border-black rounded-full -rotate-3 group-hover:rotate-3 transition-transform duration-300"></div>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="lg:w-1/3">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6" style={{fontFamily: "Inter"}}>
                            Contact Info
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="bg-pink-100 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <a href="mailto:hagar.ifrah@example.com"
                                       className="text-pink-500 hover:underline">hagar.ifrah@example.com</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-pink-100 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0119.72 19h-3.28a2 2 0 01-2-2 13.96 13.96 0 01-1.46-4.464 13.96 13.96 0 01-4.464-1.46A2 2 0 015 3z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <a href="tel:+1234567890" className="text-pink-500 hover:underline">+1 (234)
                                        567-890</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

