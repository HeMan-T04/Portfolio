"use client";
import Image from "next/image";
import MatrixRainCanvas from "./canvas";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useState } from "react";
import "./page.css";
import { getAbout, getProjects} from "../../sanity/sanity-utils";
import { getSkills } from "../../sanity/sanity-utils";
export default function Home() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState([]);
  useEffect(() => {
    // This code will only run in the browser, not during server-side rendering
    var app = document.getElementById("app");
    getProjects().then((data) => setProjects(data));
    getAbout().then((data) => setAbout(data));
    getSkills().then((data) => setSkills(data));
    var typewriter = new Typewriter(
      "#Subtitle",
      {
        loop: true,
      },
      []
    );

    // screen.orientation.lock(portrait);

    typewriter
      .typeString("Cyber Security Analyst")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Full Stack Developer")
      .pauseFor(2500)
      .deleteAll()
      .typeString("CTF Enthusiast")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Computer Science Student")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Active Learner/Researcher")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Love to learn new stuff..<3")
      .pauseFor(2000)
      .start();
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
        <div className="sideNav-button">
          <a>/Contact</a>
        </div>
      </div>
      <div
        id="Home"
        style={{ color: "white", display: "block", height: "100vh" }}
      >
        <span className="Name">
          Hemant <span className="Subtitle1">Kathuria</span>
        </span>
        <span className="Subtitle" id="Subtitle"></span>
      </div>
      <div id="About">
        <div className="About">
          {about.map((about) => (
            <>
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
            </>
            ))}
          
        </div>
      </div>
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
      <div className="Parent-Skills" id="Projects">
        <h3 className="Project-title font-bold">Projects</h3>
        {projects.map((project) => (
          <a href={project.url} target="_blank">
          <div key={project._id} className="Projects-card">
            <div className="max-w-sm hover:scale-105 transition rounded-lg overflow-hidden shadow-lg bg-[#ffffff40]">
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt="Project Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <span className="text-justify text-base">
                  {project.description.map((block) => (
                    <p key={block._key}>{block.children[0].text}</p>
                  ))}
                </span>
              </div>
              <div className="px-6 pt-4 pb-2">
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
  );
}
