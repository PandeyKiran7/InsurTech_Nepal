'use client';

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div id="contact" className="py-20 bg-gray-50">
      <section className="max-w-6xl mx-auto px-4">
       
        <div className="text-center mb-12 mt-30">
          <h2 className="text-4xl font-bold text-sky-600 mb-4 mt-4">Get In Touch</h2>
          <p className="text-gray-600 text-xl">
            We'd love to hear from you! Reach out for a demo, partnership inquiries, or support.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <form id="contactForm" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xl font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-xl font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="subject" className="text-xl font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="text-xl font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              ></textarea>
            </div>

          <div className="md:col-span-2 flex justify-center">
  <button
    type="submit"
    className="bg-sky-400 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition"
  >
    Send Message
  </button>
</div>

          </form>
        </div>

        {/* Office Info + Map */}
        <div className="bg-white shadow-xl  text-xl rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-sky-600 mb-6">Our Office</h3>
          <div className="text-gray-700 space-y-3">
            <p>
              <i className="fas fa-map-marker-alt text-yellow-500 mr-2"></i>
              Pulchowk, Lalitpur, Nepal
            </p>
            <p>
              <i className="fas fa-phone-alt text-yellow-500 mr-2"></i>
              +977 1 555-1234
            </p>
            <p>
              <i className="fas fa-envelope text-yellow-500 mr-2"></i>
              info@insurtechnepal.com
            </p>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.748374971708!2d85.31502471507746!3d27.69408228279862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0a0d9b62f%3A0x6b412b1d6e1f0e42!2sPulchowk%2C%20Lalitpur%2044700%2C%20Nepal!5e0!3m2!1sen!2snp!4v1678901234567!5m2!1sen!2snp"
              width="100%"
              height="300"
              className="rounded-xl border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
