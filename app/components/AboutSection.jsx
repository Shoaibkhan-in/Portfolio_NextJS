"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor&apos;s Of Computer Science Graduate</li>
        <li>From SPPU University with 8.63GPA</li>
        <li>HSC(XII) in Science with 83.67%</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "language",
    content: (
      <ul className="list-disc pl-2">
        <ul className="list-disc pl-2">
          Languages
        </ul>
        <ul className="list-disc pl-2" >
          <li>English</li>
          <li>Hindi</li>
          <li>Marathi</li>
        </ul>
        <ul className="list-disc pl-2">
          Technical Languages
        </ul>
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>JavaScript</li>
          <li>C Programming Language</li>
          <li>Python</li>
        </ul>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello! I’m Soyab, I have a strong foundation in programming,
            with proficiency in C Programming, Java, and Python. I have hands-on experience in web development,
            particularly with the MERN stack.
            This expertise allows me to build full-stack web applications that are both robust and scalable.
            I am passionate about leveraging my technical skills to solve real-world problems
            and am constantly looking to expand my knowledge and expertise.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("language")}
              active={tab === "language"}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
