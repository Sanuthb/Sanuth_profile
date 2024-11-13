import React from "react";
import { Pen, Plus, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Experience_comp = () => {
  const items = [
    {
      image: "/assets/profile/experience.jpg",
      title: "Software Engineer",
      company: "Street2site · Freelance",
      duration: "Nov 2023 - Present · 1 yr",
      location: "Bengaluru, Karnataka, India · Hybrid",
      description:
        "Street2Site is a freelancing company founded by friends, dedicated to transforming businesses through web design, development, and digital marketing solutions. We help businesses build a strong online presence.Expert website design and development.SEO and digital marketing services.Customized, user-centric solutions.Collaborative, creative, and client-focused approach.Empower your business to thrive in the digital age. Let Street2Site take your vision online and watch your success grow!",
      skills: "Cascading Style Sheets (CSS), WordPress and +13 skills",
    },
    {
      image: "/assets/profile/experience.jpg",
      title: "Website Manager",
      company: "Achaar Gali · Part-time",
      duration: "Sep 2024 - Oct 2024 · 2 mos",
      location: "",
      description: "",
      skills: "Wordpress",
    },
    {
      image: "/assets/profile/vtect.jpg",
      title: "Student Intern",
      company: "VTECH INTEGRATED SOLUTIONS · Internship",
      duration: "Mar 2024 - May 2024 · 3 mos",
      location: "Bengaluru, Karnataka, India · On-site",
      description:
        "Completed an internship focusing on full stack development with a project that enhanced UI design and backend.",
      skills: "MERN Stack",
    },
    {
      image: "/assets/profile/ekennis.jpg",
      title: "Software Engineer",
      company: "Ekennis Software Service Limited · Self-employed",
      duration: "Aug 2023 - Nov 2023 · 4 mos",
      location: "Bengaluru South, Karnataka, India · On-site",
      description:
        "Proficient in leveraging Wix and Velo technologies, excelling in custom functionalities and dynamic website design.Recognized for optimizing website performance and significant contributions to project completion and problem-solving skills.",
      skills: "WordPress, HTML and +4 skills",
    },
    {
      image: "/assets/profile/experience.jpg",
      title: "Student Intern",
      company: "Camplain Innovations · Internship",
      duration: "Dec 2022 - Feb 2023 · 3 mos",
      location: "India · Remote",
      description:
        "Completed an internship focusing on beginner full stack development.",
      skills: "HTML, Cascading Style Sheets (CSS) and +4 skills",
    },
  ];

  return (
    <div className="w-full md:w-[50rem] bg-[#1b1f23] md:rounded-lg md:px-8 md:py-3 p-5">
      <div className="flex items-center justify-between text-white">
        <h1 className="text-xl font-semibold">Experience</h1>
        <div className="flex gap-4">
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Plus size={18} />
          </button>
          <button className="hover:bg-[#2c2f33] p-2 rounded-full">
            <Pen size={18} />
          </button>
        </div>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 md:gap-4 py-4 border-b-2 w-full border-gray-700 "
          >
            <Image
              className="w-[3rem] h-[3rem] object-cover "
              src={item.image}
              alt="experience"
              width={150}
              height={0}
            />
            <div className="flex flex-col gap-1">
              <div className="text-lg font-semibold  text-white">
                {item.title}
              </div>
              <div className="md:text-base font-normal text-white">
                {item.company}
              </div>
              <div className="md:text-base font-normal text-gray-400 text-sm">
                {item.duration}
              </div>
              <div className="md:text-base font-normal text-gray-400 text-sm">
                {item.location}
              </div>
              <div className="text-white">
                <p className="text-justify hidden md:block">
                  {item.description}
                </p>
                <p className="text-sm block md:hidden">
                  {item.description.length > 200
                    ? item.description.slice(0, 100)+'...'
                    : item.description}
                </p>
              </div>
              <div className="mt-2 flex gap-2">
                <Gem size={15} className="text-white" />
                <Link
                  href="/pages/profile"
                  className="text-white text-sm font-medium hover:text-blue-500 hover:underline"
                >
                  {item.skills}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience_comp;
