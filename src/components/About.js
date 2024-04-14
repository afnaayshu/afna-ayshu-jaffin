import React from "react";

export default function About() {
return(
    <section id = "about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                     Hi, I'm Afna
                    <br className="hidden lg:inline-block" />I love to Design & Develop
                </h1>
                <p className="mb-8 leading-relaxed">
                Hi, I'm Afna Ayshu Jaffin, a final-year CSE student pursuing my Bachelor's degree. 
                With a strong passion for technology, I have actively participated in several hackathons, 
                gaining hands-on experience in software development. I was awarded a special mention for 
                GDG Cloud Kochi's AI Adapt Search competition on Kaggle, which further fueled my interest 
                in the field of artificial intelligence. I possess a good grasp of the basics of programming 
                languages such as C, C++, Python, and Java, and I'm currently learning React to develop my 
                skills further.I am also a graphic designer. I use Abode Photoshop and Figma for the same. 
                I am always on the lookout for opportunities to learn and grow in my field, and 
                I believe that my enthusiasm and dedication make me a valuable asset to any project.
                Connect with me to explore exciting possibilities!
                </p>
            <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./afna.jpg"
          />
            </div>
        </div>
    </section>
)
}