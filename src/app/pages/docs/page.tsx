import { DockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const items = [
    {
      searchtitle: "1. To view my profile:",
      keywords: ["My profile", "LinkedIn", "Profile"],
      paragraph:
        "After searching, you'll be taken to a dedicated section showcasing:",
      paralist: [
        "My personal details",
        "Social media links (including LinkedIn)",
        "A brief bio",
      ],
      image: "/assets/Docs/screenshot2.png",
    },
    {
      searchtitle: "2. To explore my works:",
      keywords: ["My works", "Amazon", "Works"],
      paragraph: "Discover the projects I've worked on, including:",
      paralist: [
        "Major contributions and achievements",
        "Collaborations and partnerships",
        "A portfolio of creative and professional projects",
      ],
      image: "/assets/Docs/screenshot4.png",
    },
    {
      searchtitle: "3. To learn about my journey:",
      keywords: ["My journey", "Agoda", "Journey"],
      paragraph: "Dive into my story:",
      paralist: [
        "The timeline of my career",
        "Key milestones and transitions",
        "Reflections on experiences that shaped who I am",
      ],
      image: "/assets/Docs/screenshot5.png",
    },
    {
      searchtitle: "4. To view mydocs:",
      keywords: ["mydocs"],
      paragraph: "Explore Key Sections:",
      paralist: [
        "My Profile: Learn about me, including my background and LinkedIn profile.",
        "My Works: Browse my portfolio and notable projects.",
        "My Journey: Dive into my professional story and career path.",
      ],
      image: "/assets/Docs/screenshot6.png",
    },
  ];

  return (
    <div>
      <div className="relative h-[100vh] w-full bg-slate-950 text-white ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="flex items-center justify-between px-3 py-4">
          <div className="z-10 flex items-center justify-center gap-2">
            <div className="bg-yellow-500 p-2 rounded-full text-black">
              <DockIcon />
            </div>
            <h1 className="text-xl">MyDoc</h1>
          </div>
        </div>
        <div className="text-white h-screen w-full flex items-center justify-center flex-col gap-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl">
              Guide to{" "}
              <span className="bg-yellow-500 text-white p-1 md:p-2 rounded-xl">
                Navigating
              </span>{" "}
              My Profile Website
            </h1>
          </div>
          <p className="w-full md:w-1/2 text-center text-lg px-10 md:px-0">
            Hello, and welcome to my profile website! I&apos;m thrilled to have you
            here. This space is all about sharing my journey, works, and
            experiences. Let&apos;s explore together!
          </p>
        </div>
      </div>
      <div className="bg-[#020617] text-white">
        <div className="h-screen w-full flex items-center justify-center flex-col gap-10">
          <Image src="/assets/Docs/kalamsir.webp" alt="" width={100} height={0} className="w-20 rounded-full"/>
          <h1 className="text-center text-4xl md:text-none px-10 md:px-0">
            You have to dream before your dreams can come true.
          </h1>
          <div className="flex items-center justify-end">
            <p className="font-semibold text-lg">– Dr. APJ Abdul Kalam</p>
          </div>
        </div>
        <div className="w-full h-full md:px-20 px-10">
          <div className="w-full ">
            <h1 className="text-base text-yellow-500 font-medium">Guide</h1>
            <h1 className="text-3xl md:text-5xl font-bold">How to Navigate?</h1>
            <p className="mt-2 text-gray-500 text-justify md:text-left">
              This website is designed to be interactive and user-friendly.
              Here&apos;s how you can access different sections:
            </p>
          </div>
          <div className="mt-6 pb-10 border-b-[.1rem] border-gray-500">
            <h1 className="text-2xl md:text-3xl font-bold">Search to Explore</h1>
            <p className="mt-3 text-gray-500 text-justify md:text-left">
              Use the <b className="text-white">Search Bar</b> on the website to
              type in specific keywords and directly navigate to the
              corresponding sections.
            </p>

            <Image
              src="/assets/Docs/screenshot1.png"
              alt="screenshot1"
              width={1000}
              height={0}
              className="w-full mt-2 rounded-md"
            />
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full md:p-5 mt-4 flex flex-col gap-5"
                >
                  <h1 className="font-semibold text-lg">{item.searchtitle}</h1>
                  <div className="bg-slate-900 w-full rounded-lg p-5 flex flex-col gap-5 ">
                    <li className="list-disc font-medium">Keywords:</li>
                    <ul className="mx-20">
                      {item.keywords.map((keyword, index2) => {
                        return (
                          <li
                            key={index2}
                            className="text-yellow-500 font-semibold text-base list-disc"
                          >
                            {keyword}
                          </li>
                        );
                      })}
                    </ul>
                    <Image
                      src={item.image}
                      alt={item.searchtitle}
                      width={1000}
                      height={0}
                      className="w-full mt-2 rounded-md"
                    />
                  </div>
                  <p className="text-gray-500">{item.paragraph}</p>
                  <ul className="mx-10 md:mx-20 list-disc">
                    {item.paralist.map((paraitem, index3) => {
                      return <li key={index3}>{paraitem}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="w-full mt-10 border-b-[.1rem] border-gray-500 pb-10">
            <h1 className="text-base text-yellow-500 font-medium">
              Journey Guide
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold">
              How to Use the Journey Page to Book a Flight and View My Journey ?
            </h1>
            <p className="mt-2 text-gray-500 text-justify md:text-left">
              The <b className="text-white">Journey Page</b> allows you to
              simulate booking a flight to learn more about my professional and
              personal journey. Follow these steps to fill out the input fields
              and get started:
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Image
                src="/assets/Docs/screenshot7.png"
                alt="screenshot1"
                width={500}
                height={0}
                className="md:w-1/2 md:h-1/2 mt-2 rounded-md"
              />
            </div>
            <div className="flex gap-4 flex-col mt-5">
              <div>
                <h1 className="text-lg font-semibold">
                  1. Enter Your Nearest Airport:
                </h1>
                <li className="text-gray-500 mx-10 text-justify md:text-left">
                  In the search box, type the name of your nearest international
                  airport. This simulates your starting point for the journey.
                </li>
              </div>
              <div>
                <h1 className="text-lg font-semibold">2. Select Departure and Arrival Cities:</h1>
                <li className="text-gray-500 mx-10 text-justify md:text-left ">
                  Choose your desired departure city (e.g., Delhi) and arrival
                  city (e.g., Bangalore) using the provided dropdown or
                  selection boxes.
                </li>
              </div>
              <div>
                <h1 className="text-lg font-semibold">3. Specify the Number of Travelers:</h1>
                <li className="text-gray-500 mx-10 text-justify md:text-left">
                  Use the + and – buttons to select the number of travelers.
                  This will simulate the number of people embarking on this
                  journey with you.
                </li>
              </div>
              <div>
                <h1 className="text-lg font-semibold">4. Click &quot;Book Now&quot;:</h1>
                <li className="text-gray-500 mx-10 text-justify md:text-left">
                  After filling in all the fields, click the Book Now button to
                  proceed. This will take you to an interactive section where
                  you can explore and view my journey.
                </li>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-bold">Stay Informed</h1>
            <p className="mt-3 text-gray-500">
              Check for updates in the{" "}
              <b className="text-white">News/Updates </b>
              section of MyDocs to stay informed about new features or content
              added to the website.
            </p>
          </div>
        </div>
        <div className="bg-slate-900 w-full p-2 md:h-[20vh] h-[40vh] flex flex-col gap-2 items-center justify-center mt-10">
          <p className="text-base md:text-lg text-center md:text-left">
            Thank you for visiting my profile website. I hope you enjoy
            exploring it as much as I enjoyed creating it for you!
          </p>
          <p className="text-gray-500">
            Click <b className="text-white">Home</b> to go back to my profile
          </p>
          <Link
            href="/"
            className="bg-yellow-500 p-2 rounded-lg text-black font-medium w-fit"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
