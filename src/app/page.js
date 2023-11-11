"use client";
import Image from "next/image";
import MatrixRainCanvas from "./canvas";
import Typewriter from "typewriter-effect";
import { useEffect, useState, FormEvent} from "react";
import "./page.css";
import { getAbout, getProjects, getSocials } from "../../sanity/sanity-utils";
import { getSkills, getSubtitle, getCerts } from "../../sanity/sanity-utils";
import Contact from "./contact";
export const metadata = {
  metadataBase: new URL('https://portfolio-ruby-ten-89.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
}
export default function Home() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState([]);
  const [subtitle, setSubtitle] = useState([]);
  const [socials, setSocials] = useState([]);
  const [certs, setCerts] = useState([]);
  
  useEffect(() => {
    getProjects().then((data) => setProjects(data));
    getAbout().then((data) => setAbout(data));
    getSubtitle().then((data) => setSubtitle(data));
    getSocials().then((data) => setSocials(data));
    getSkills().then((data) => setSkills(data));
    getCerts().then((data) => setCerts(data));
  }, []);
  return (
    <div style={{}}>
      <MatrixRainCanvas />
      <div className="sideNav">
        <div className="sideNav-button">
          <a href="#Home">/</a>
        </div>
        <div className="sideNav-button">
          <a href="#About">/About</a>
        </div>
        <div className="sideNav-button">
          <a href="#Skills">/Skills</a>
        </div>
        <div className="sideNav-button">
          <a href="#Projects">/Projects</a>
        </div>
        {/* <div className="sideNav-button">
          <a href="#Certs">/Certs</a>
        </div> */}
        <div className="sideNav-button">
          <a href="#Contact">/Contact</a>
        </div>
      </div>
      <div
        id="Home"
        style={{ color: "white", display: "block", height: "100vh" }}
      >
        <span className="Name">
          Hemant <span className="Subtitle1">Kathuria</span>
        </span>
        <span className="Subtitle" id="Subtitle">
          <Typewriter
            options={{
              strings: subtitle,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      {about.map((about) => (
        <div key={about._id} id="About">
          <div className="About" key={about._id}>
            <img className="About-img" src={about.image}></img>
            <div className="About-content">
              <h3 className="font-bold">About</h3>
              <span className="About-matter">
                {about.about.map((block) => (
                  <p key={block._key}>{block.children[0].text}</p>
                ))}
              </span>
              <a
                className="About-button hover:scale-105 transition"
                target="_blank"
                href={about.resume}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="Parent-Skills" id="Skills">
        <h3 className="Skills-title font-bold">Skills</h3>
        <div className="Skills">
          <div className="Skills-grid">
            {skills
              .sort((a, b) => a.order - b.order)
              .map((skill) => (
                <div key={skill._id} className="hover:scale-105 transition">
                  <div key={skill._id} className="Skills-card">
                    <img className="Skills-img" src={skill.image} />
                    <h4 className="Skills-card-title">{skill.name}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div style={{postion:"fixed",zIndex:"1000",left:0,bottom:0}}id="alert-container"></div>
      <div className="Parent-Projects" id="Projects">
        <h3 className="Project-title font-bold">Projects</h3>
        <div className="grid grid-cols-1 mx-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <a href={project.url} key={project._id} target="_blank">
                <div
                  key={project._id}
                  className="max-w-sm hover:scale-105 transition rounded-lg overflow-hidden shadow-lg bg-[#ffffff40]"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column", // Align children in a column
                  }}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={project.image}
                    alt="Project Image"
                  />
                  <div className="px-6 py-4 flex-grow">
                    {" "}
                    {/* Use flex-grow to fill remaining space */}
                    <div className="font-bold text-xl mb-2">{project.name}</div>
                    <span className="text-justify text-base">
                      {project.description.map((block) => (
                        <p key={block._key}>{block.children[0].text}</p>
                      ))}
                    </span>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {project.hashtags.map((hashtag) => (
                        <span
                          key={hashtag}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                          #{hashtag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
      {/* <div className="Parent-Projects" id="Certs">
        <h3 className="Project-title">Certifications
        <span className="Subtitle2">& Courses</span></h3>
        <div className="grid grid-cols-1 mx-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-max gap-4">
          {certs
            .sort((a, b) => a.order - b.order)
            .map((certs) => (
              <a href={certs.url} key={certs._id} target="_blank">
                <div
                  className="max-w-sm hover:scale-105 transition rounded-lg overflow-hidden shadow-lg bg-[#ffffff40]"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column", // Align children in a column
                  }}
                >
                  <img
                    className="w-48 h-48 mx-auto object-cover rounded-full"
                    src={certs.image}
                    alt="Project Image"
                  />
                  <div className="px-6 py-4 flex flex-col flex-grow items-center justify-center">
                    {" "}
                    <div className="font-bold text-xl mb-2 ">{certs.name}</div>
                    <span className="text-justify text-base">
                      {certs.description.map((block) => (
                        <p key={block._key}>{block.children[0].text}</p>
                      ))}
                    </span>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <button className="inline-block w-full bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <a href={certs.url} className="flex flex-row justify-center"target="_blank"><img style={{marginRight:"0.4rem"}} width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/visible--v2.png" alt="external-link"/>View Certificate</a>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div> */}
      <div id="Contact" className="Parent-Projects">
        <h3 className="Project-title font-bold my-16">Contact Me</h3>
        {/* <div className="flex items-center justify-center p-12"> */}
            <Contact />
        {/* </div> */}
      </div>
      <section style={{ marginTop: "10rem" }}>
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          {socials.map((social) => (
            <div
              key={social._id}
              className="flex justify-center mt-8 space-x-6"
            >
              <a
                href={`mailto:${social.Email}`}
                target="_blank"
                className="text-gray-400 hover:text-gray-500 inline-block"
              >
                <span className="sr-only">Email</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21,4H3A2,2,0,0,0,1,6V18a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V6A2,2,0,0,0,21,4ZM3,6L12,13.82,21,6ZM21,18H3V8l9,7.18L21,8Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              <a
                href={social.Facebook}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href={social.Instagram}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href={social.Twitter}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href={social.GitHub}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href={social.LinkedIn}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 45 48"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4zM17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47zM39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </a>
            </div>
          ))}
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Hemant Kathuria. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
