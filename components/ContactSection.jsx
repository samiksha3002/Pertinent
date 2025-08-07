"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section
      className="bg-white py-20 px-6 text-black"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div>
          <h2 id="contact-heading" className="text-3xl font-bold mb-6">
            Contact <span className="text-red-600">Pertinent</span>
          </h2>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Address</h3>
              <p className="text-gray-700">
                A2b Infotech, RBI Colony, 5th Layout,
                <br />
                Nagpur, Maharashtra 440025, India
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="text-gray-700">
                <a
                  href="mailto:pertinent.cs@gmail.com"
                  className="hover:underline"
                >
                  pertinent.cs@gmail.com
                </a>
                <br />
                <a
                  href="mailto:u.chourasia@pertinentservices.com"
                  className="hover:underline"
                >
                  projects@pertinentservices.com
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="text-gray-700">
                <a href="tel:+919404080041" className="hover:underline">
                  +91-940-408-0041
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="7ba19011-ae4e-469f-9190-761697ca0fd2"
            />

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+91-XXXXXXXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Your City"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-700">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="Inquiry / Feedback / etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-700">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="max-w-7xl mx-auto mt-16 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.2886904068796!2d79.05740967503347!3d21.10105368056643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfa94901fbf5%3A0x4c610b72c0f2984d!2sA2B%20infotech!5e0!3m2!1sen!2sin!4v1754559591528!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
