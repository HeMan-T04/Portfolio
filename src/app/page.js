"use client";
import Image from "next/image";
import MatrixRainCanvas from "./canvas";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect,useState } from "react";
import "./page.css";
import {getProjects} from '../../sanity/sanity-utils'
import Projects  from './Projects';
import { getSkills } from "../../sanity/sanity-utils";
export default function Home() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // This code will only run in the browser, not during server-side rendering
    var app = document.getElementById("app");
    getProjects().then((data) => setProjects(data));
    getSkills().then((data) => setSkills(data));
    var typewriter = new Typewriter("#Subtitle", {
      loop: true,
    },[]);

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
          <img className="About-img" src="/profile.jpg"></img>
          <div className="About-content">
            <h3 className="font-bold">About</h3>
            <p className="About-matter">
              Hello Everyone! My Name is Hemant Kathuria. I am a Cyber Security
              Analyst and a Full Stack Developer. I enjoy playing CTFs,
              developing, and learning whenever I get a chance. If you want to
              play a CTF or discuss anything about security, feel free to ping
              me.
            </p>
            <a
              className="About-button"
              target="_blank"
              href="https://drive.google.com/file/d/1rti-GHkYxs-0NLRuLN0MCXqSCe0FXl-y/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="Parent-Skills" id="Skills">
        <h3 className="Skills-title font-bold">Skills</h3>
        <div className="Skills">
          <div className="Skills-grid">
            {skills.sort((a, b) => a.order-b.order).map((skill) => (
              <div key={skill._id} className="Skills-card">
                <img className="Skills-img" src={skill.image} />
                <h4 className="Skills-card-title">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Parent-Skills" id="Projects">
        <h3 className="Skills-title font-bold">Projects</h3>
          <Projects/>
      </div>
    </div>
  );
}
