"use client";
import CTA from "@/components/Cta";
import FAQAbout from "@/components/FAQ/FAQAbout";
import AboutHeroSection from "@/components/HeroSection/AboutHeroSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import {
  Eye,
  Rocket,
  ShieldCheck,
  Award,
  Users,
  Globe,
  Users2,
} from "lucide-react";
import React from "react";

const storyCard = [
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Vision",
    text: "To make insurance accessible, transparent, and efficient for every Nepalese citizen through innovative technology solutions.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Mission",
    text: "To empower insurance companies with world-class software, enabling them to innovate, grow, and serve their customers better.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Values",
    text: "Innovation, Integrity, Customer Success, Excellence, and Collaboration are at the core of everything we do.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team",
    text: "A passionate team of engineers, insurance specialists, and visionaries driving real change.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Reach",
    text: "Delivering solutions nationwide, expanding across borders, and transforming global insurance experiences.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Trust",
    text: "Built on reliability, transparency, and long-term partnerships with our clients.",
  },
];

const teamMembers = [
  {
    initials: "JR",
    name: "Janak Raj Pant",
    role: "Chief Executive Officer",
    bio: "Janak is a visionary leader with over 15 years of experience in software development and insurance. He leads our strategic direction.",
  },
  {
    initials: "AS",
    name: "Alisha Shrestha",
    role: "Chief Technology Officer",
    bio: "Alisha is an expert in scalable architecture and cloud solutions. She drives our product development and innovation.",
  },
  {
    initials: "SP",
    name: "Suresh Poudel",
    role: "Head of Sales & Marketing",
    bio: "Suresh brings extensive experience in market penetration and client relations, building strong partnerships across the industry.",
  },
  {
    initials: "NG",
    name: "Nisha Gurung",
    role: "Lead Solutions Architect",
    bio: "Nisha designs robust and efficient solutions, ensuring our products meet the highest standards of performance and security.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div id="about" className=" bg-white">
      <div className="text-gray-100 mb-10 bg-[#7f52e8e0]">
      <AboutHeroSection/>
      </div>
      <section className="mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-base font-extrabold text-gray-800">
            About Insurtech Nepal
          </h2>
          <div className="w-10 h-1 bg-[#2b0569f9] mx-auto mt-2 rounded"></div>
          <p className=" mt-4 text-2xl font-semibold text-[#2b0569f9]">
            Pioneering the digital transformation of Nepal's insurance industry
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mx-auto py-10 mb-20 max-w-6xl items-center">
          <h3 className="text-2xl font-semibold text-[#2b0569f9] mb-6">
            Our Story
          </h3>
          <p className="text-gray-600 leading-relaxed mb-10 text-base">
            Founded with a vision to revolutionize Nepal's insurance landscape,
            Insurtech Nepal has been at the forefront of insurance technology
            innovation for over a decade. We started as a small team of
            passionate developers and insurance experts who saw the potential to
            transform traditional insurance processes through cutting-edge
            technology.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {storyCard.map((item, index) => (
              <div
                key={index}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
                className="bg-white border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition rounded-xl"
              >
                <div className="bg-gradient-to-tr from-[#2b0569f9] to-[#2b0569f9] text-white w-16 h-16 flex justify-center items-center rounded-full mx-auto mb-4 text-base">
                  {item.icon}
                </div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12  ">
          <h2 className="text-base font-bold text-gray-800">
            Meet Our Leadership Team
          </h2>
          <p className=" text-[#2b0569f9] mt-2 text-2xl mb-4 ">
            Driven by passion and expertise, our team is dedicated to your
            success.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-6xl  mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <Users2 className="text-[#2b0569f9] w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-[#2b0569f9]">
              Meet Our Leadership
            </h3>
            <div className="w-10 h-1 bg-[#2b0569f9] mx-auto mt-2 rounded"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#2b0569f9] text-center text-white flex items-center justify-center text-xl font-bold mb-4 shadow">
                  {member.initials}
                </div>
                <h4 className="text-base font-semibold text-gray-800">
                  {member.name}
                </h4>
                <div className="text-[#2b0569f9] mb-2 text-base">
                  {member.role}
                </div>
                <p className="text-gray-600 text-base">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
          <FAQAbout/>
        <div className="text-gray-800 bg-white">
          <CTA/>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
