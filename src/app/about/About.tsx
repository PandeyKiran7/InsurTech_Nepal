'use client';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div id="about" className="py-28 bg-white">
      <section className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">About Insurtech Nepal</h2>
          <p className="text-gray-500 mt-2">
            Pioneering the digital transformation of Nepal's insurance industry
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Story</h3>
          <p className="text-gray-600 leading-relaxed mb-10">
            Founded with a vision to revolutionize Nepal's insurance landscape,
            Insurtech Nepal has been at the forefront of insurance technology
            innovation for over a decade. We started as a small team of passionate
            developers and insurance experts who saw the potential to transform
            traditional insurance processes through cutting-edge technology.
          </p>

          {/* Vision / Mission / Values */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: 'fas fa-eye',
                title: 'Vision',
                text: 'To make insurance accessible, transparent, and efficient for every Nepalese citizen through innovative technology solutions.',
              },
              {
                icon: 'fas fa-rocket',
                title: 'Mission',
                text: 'To empower insurance companies with world-class software, enabling them to innovate, grow, and serve their customers better.',
              },
              {
                icon: 'fas fa-award',
                title: 'Values',
                text: 'Innovation, Integrity, Customer Success, Excellence, and Collaboration are at the core of everything we do.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-2xl mx-auto mb-4">
                  <i className={item.icon}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Leadership Team</h2>
          <p className="text-gray-500 mt-2">
            Driven by passion and expertise, our team is dedicated to your success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              initials: 'JR',
              name: 'Janak Raj Pant',
              role: 'Chief Executive Officer',
              bio: 'Janak is a visionary leader with over 15 years of experience in software development and insurance. He leads our strategic direction.',
            },
            {
              initials: 'AS',
              name: 'Alisha Shrestha',
              role: 'Chief Technology Officer',
              bio: 'Alisha is an expert in scalable architecture and cloud solutions. She drives our product development and innovation.',
            },
            {
              initials: 'SP',
              name: 'Suresh Poudel',
              role: 'Head of Sales & Marketing',
              bio: 'Suresh brings extensive experience in market penetration and client relations, building strong partnerships across the industry.',
            },
            {
              initials: 'NG',
              name: 'Nisha Gurung',
              role: 'Lead Solutions Architect',
              bio: 'Nisha designs robust and efficient solutions, ensuring our products meet the highest standards of performance and security.',
            },
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                {member.initials}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <div className="text-blue-500 mb-2 text-sm">{member.role}</div>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
