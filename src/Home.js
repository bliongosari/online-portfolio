import React, { useEffect, useState } from "react";
import "./Home.css";
import profilePicture from "./images/background.png";
import github from "./images/github.png";
import emailLogo from "./images/email.png";
import cv from "./images/cv.png";
import linkedin from "./images/linkedin.png";
import down from "./images/down.png";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from "./Navbar";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import { useSpring, animated } from "react-spring";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import project1_image1 from "./images/project1/1.png";
import project1_image2 from "./images/project1/2.png";
import project1_image3 from "./images/project1/3.png";
import project1_image4 from "./images/project1/4.png";
import project1_image5 from "./images/project1/5.png";
import project1_image6 from "./images/project1/6.png";
import project1_image7 from "./images/project1/7.png";
import project1_image8 from "./images/project1/8.png";
import project1_image9 from "./images/project1/9.png";

import project2_image1 from "./images/project2/1.png";
import project2_image2 from "./images/project2/2.png";
import project2_image3 from "./images/project2/3.png";
import project2_image4 from "./images/project2/4.png";

import project3_image1 from "./images/project3/1.png";
import project3_image2 from "./images/project3/2.png";

import project4_image1 from "./images/project4/1.png";
import project4_image2 from "./images/project4/2.png";
import project4_image3 from "./images/project4/3.png";

function Home() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const project1 = [
    {
      original: project1_image1,
    },
    {
      original: project1_image2,
    },
    {
      original: project1_image3,
    },
    {
      original: project1_image4,
    },
    {
      original: project1_image5,
    },
    {
      original: project1_image6,
    },
    {
      original: project1_image7,
    },
    {
      original: project1_image8,
    },
    {
      original: project1_image9,
    },
  ];

  const project2 = [
    {
      original: project2_image1,
    },
    {
      original: project2_image2,
    },
    {
      original: project2_image3,
    },
    {
      original: project2_image4,
    },
  ];

  const project3 = [
    {
      original: project3_image1,
    },
    {
      original: project3_image2,
    },
  ];

  const project4 = [
    {
      original: project4_image1,
    },
    {
      original: project4_image2,
    },
    {
      original: project4_image3,
    },
  ];

  const config = { mass: 5, tension: 2000, friction: 200 };
  const [flip, set] = useState(false);
  const props = useSpring({
    // from: { opacity: 0, marginLeft: -2000 },
    // to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 700 },
  });

  const downBtnAnimation = useSpring({
    // from: { opacity: 0, marginLeft: -2000 },
    // to: { opacity: 1, marginLeft: 0 },
    from: { marginTop: "0px" },
    to: { marginTop: "35px" },
    loop: true,
    config: { duration: 1500, velocity: 10, mass: 20 },
  });

  return (
    <div className="home">
      <section className="header">
        <animated.div style={props}>
          <Navbar></Navbar>
          {/* <div className="containerPic">
          <img className="mypic" src={profilePicture} alt="pic"></img>
        </div> */}
          <div className="header__wrapper">
            <div className="animate__animated animate__bounceInLeft">
              <h1 className="name"> BRANDON VINCENT </h1>
              <div className="line_title"></div>
              <h2 className="description">
                Web Developer/Software Engineer/Data Analyst{" "}
              </h2>
            </div>
            <button className="readMore">
              {" "}
              <a href="#aboutMe" className="readMore">
                READ MORE{" "}
              </a>
            </button>
            <animated.div style={downBtnAnimation}>
              <a href="#aboutMe">
                <img src={down} alt="downbtn" className="iconsdown"></img>
              </a>
            </animated.div>
          </div>
        </animated.div>
      </section>

      <section className="aboutMe" id="aboutMe">
        <ScrollAnimation animateIn="bounceInLeft">
          <h1 className="title"> ABOUT ME</h1>
          <div class="line__aboutme"> </div>
          <div className="about__content">
            <div className="intro">
              <h2>
                Hi! My name is Brandon. I am a Software Engineer/Web
                Developer/Data Analyst. I am extremely detailed, logical, and
                keen in learning/adapting to new frameworks. I aim to always
                exceed client's expectations and create the best quality of
                work. Currently in my third year of my Computer Science degree,
                and open to any job opportunities
                (Internship/Part-time/Casual/Full-Time/Graduate).
              </h2>
              <div className="links">
                <a href="https://www.linkedin.com/in/brandon-vincent-liongosari-323475153/">
                  <img src={linkedin} alt="linkedin" className="icons"></img>
                </a>
                <a href="https://github.com/bliongosari">
                  <img src={github} alt="github" className="icons"></img>
                </a>
                <a href="mailto:bradonvincent567@gmail.com">
                  <img src={emailLogo} alt="email" className="icons"></img>
                </a>
                <a href="/">
                  <img src={cv} alt="resume" className="icons"></img>
                </a>
              </div>

              {/* logos */}

              <div className="hobbies">
                <h1 className="hobbies_title"> PERSONAL INTERESTS</h1>
                <div class="line__interest"> </div>
                <h2>
                  When I am not programming, I tend to spend my time on sports
                  like fitness, basketball, tennis, e-sports, and chess. I love
                  watching interesting videos, documentaries, movies, and all
                  kinds of TV Shows. I have dreams of travelling the world and
                  experiencing all kinds of culture around the world.
                </h2>
                <a href="https://vsco.co/brandonvincent1/gallery">
                  {" "}
                  <h2>View my picture gallery here </h2>
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section className="qualifications" id="qualifications">
        <ScrollAnimation animateIn="bounceInLeft">
          <h1 className="title"> TECHNICAL SKILLS</h1>
          <div class="line__skills"> </div>
          <div className="qualifications__content">
            <ul className="qual__titles">
              <h1> PROGRAMMING LANGUAGES</h1>
            </ul>
            <ul className="prog__languages">
              <li>Java</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>C Programming</li>
              <li>Haskell</li>
              <li> HTML and CSS</li>
              <li> SQL </li>
            </ul>
            <ul className="qual__titles">
              <h1> TOOLS AND TECHNOLOGIES</h1>
            </ul>
            <ul className="tools__techs">
              <li> Git and Github</li>
              <li> JupyterLab </li>
              <li> Visual Studio Code</li>
              <li> Node.js </li>
              <li> React.js </li>
              <li> Redux </li>
              <li> MongoDB </li>
              <li> MySQL</li>
              <li> </li>
            </ul>
          </div>
        </ScrollAnimation>
      </section>
      <section className="education">
        <h1 className="title"> EDUCATION </h1>
        <div class="line__education"> </div>
        <div className="education__content">
          <div className="education__sidebar">
            <h2> UNIVERSITY OF MELBOURNE </h2>
            <h3> BACHELOR OF SCIENCE</h3>
            <h3> COMPUTER AND SOFTWARE SYSTEMS</h3>
            <h3> 2019 - 2022</h3>
          </div>
          <div className="courses">
            <ul>
              <h4>Courses taken:</h4>
              <li>
                Software Modelling and Design (Java, UML, Design Patterns,
                Software Architecture)
              </li>
              <li>
                Web Information Technologies (JavaScript, NodeJS, Express,
                MongoDB, git, Testing, HTML, CSS){" "}
              </li>
              <li>
                Data Processing and Visualization (Python, pandas, matplotlib,
                Supervised and Unsupervised Learning)
              </li>
              <li>Data Structures and Algorithms (C Programming)</li>
              <li>Database Systems (MySQL, NoSQL) </li>
            </ul>
          </div>
        </div>
        <div className="education__content">
          <div className="education__sidebar">
            <h2> TUNAS MUDA SCHOOL </h2>
            <h3> INTERNATIONAL BACCALAUREATE DIPLOMA</h3>
            <h3> JAKARTA, INDONESIA</h3>
            <h3> 2016 - 2019</h3>
          </div>
          <div className="courses">
            <ul>
              <h4>Courses taken:</h4>
              <li>Economics</li>
              <li>Chemistry </li>
              <li>Biology</li>
              <li>English</li>
              <li>Indonesian</li>
              <li> Theory of Knowledge </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="projects" id="projects">
        <h1 className="title"> PROJECTS </h1>
        <div class="line__projects"> </div>
        <div className="projectContent">
          <div className="projectContainer">
            <div className="projectTitle">
              <ImageGallery
                items={project1}
                defaultImage={project1[0].original}
                showBullets={true}
                showIndex={true}
                showThumbnails={false}
                lazyLoad={true}
                showPlayButton={false}
              />
            </div>
            <div className="projectDescription">
              <a href="http://snacks-in-a-van-chicken.herokuapp.com">
                <h2> Full-stack Food Delivery Web Application </h2>{" "}
              </a>
              Tools & Concepts: NodeJS, Express, MongoDB, git, JQuery, HTML,
              CSS, Visual Studio Code, Jest
              <ul>
                <li>
                  Built a full stack delivery-esque website with functionalities
                  similar to websites such as UberEats, Deliveroo, etc.
                </li>
                <li>
                  Created functionalities including login/logout system,
                  checkout cart, editing profiles, profile histories, and
                  ordering system for both users and vendors application.
                </li>
                <li>
                  Included the ability to edit and cancel orders by customers,
                  updated live on the vendor app.
                </li>
                <li> Created Unit and Integration tests.</li>
              </ul>
            </div>
          </div>
          <div className="projectContainer">
            <div className="projectTitle">
              <ImageGallery
                items={project2}
                defaultImage={project2[0].original}
                showBullets={true}
                showIndex={true}
                showThumbnails={false}
                lazyLoad={true}
                showPlayButton={false}
              />
            </div>
            <div className="projectDescription">
              <a href="/">
                <h2>
                  Data Analysis of Weather Conditions on Consumption in Victoria{" "}
                </h2>
              </a>
              Tools & Concepts: Python, pandas, matplotlib, regression, Mutual
              Information, Pearson Correlation
              <ul>
                <li>
                  Used open-source datasets to understand the effects of
                  different weather conditions in Victoria on consumption of
                  goods of different industry subgroups.
                </li>
                <li>
                  Used Preprocessing and Data Wrangling techniques, together
                  with feature selection
                </li>
                <li>
                  Measured linear and non-linear relationships between the
                  variables.
                </li>
              </ul>
            </div>
          </div>

          <div className="projectContainer">
            <div className="projectTitle">
              <ImageGallery
                items={project3}
                defaultImage={project3[0].original}
                showBullets={true}
                showIndex={true}
                showThumbnails={false}
                lazyLoad={true}
                showPlayButton={false}
              />
            </div>
            <div className="projectDescription">
              <a href="/">
                <h2> Cribbage Game </h2>
              </a>
              Tools & Concepts: Java, JCardGame, UML, Gang of Four Design
              Pattern, Software Architecture
              <ul>
                <li>
                  Created the scoring system (play, show) for a two player
                  (player, dealer) Cribbage game.
                </li>
                <li>
                  Created design models for the Cribbage game using UML
                  notation.
                </li>
                <li>
                  Used design patterns including Strategy, Composite, Factory,
                  and Singleton patterns
                </li>
              </ul>
            </div>
          </div>

          <div className="projectContainer">
            <div className="projectTitle">
              <ImageGallery
                items={project4}
                defaultImage={project4[0].original}
                showBullets={true}
                showIndex={true}
                showThumbnails={false}
                lazyLoad={true}
                showPlayButton={false}
              />
            </div>
            <div className="projectDescription">
              <a>
                <h2> Flappy Bird Game </h2>
              </a>
              Tools & Concepts: Python, PyCharm, Pygame
              <ul>
                <li>
                  Built a full functioning game of Flappy Bird with
                  randomization of difficulty
                </li>
                <li>
                  Included customization of bird styles and day/light options
                </li>
              </ul>
            </div>
          </div>

          <div className="upcomingProjects">
            <h1 className="title"> UPCOMING PROJECTS </h1>
            <div class="line__upcoming__projects"> </div>
            <ul>
              <li> Booking Services Web Application (MERN Stack) </li>
              <li> Shifts Manager Application (Swift)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contactMe" id="contactMe">
        <h1 className="title"> CONTACT ME </h1>
        <div class="line__contactMe"> </div>
        <form>
          <div className="nameInput">
            <div className="nameLabel">
              <label> First Name</label>
              <input
                type="firstname"
                name="firstname"
                value=""
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                required="true"
              />
            </div>
            <div className="nameLabel">
              <label> Last Name</label>
              <input
                type="lastname"
                name="lastname"
                value=""
                required="true"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <label> Email Address </label>
          <input
            type="email"
            name="email"
            value=""
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label> Message </label>
          <textarea
            type="message"
            name="message"
            id="message"
            value=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required="true"
          />
          <input type="submit" value="SEND" className="submitBtn" />
        </form>
        <div className="links2">
          <a href="https://www.linkedin.com/in/brandon-vincent-liongosari-323475153/">
            <img src={linkedin} alt="linkedin" className="icons"></img>
          </a>
          <a href="https://github.com/bliongosari">
            <img src={github} alt="github" className="icons"></img>
          </a>
          <a href="mailto:bradonvincent567@gmail.com">
            <img src={emailLogo} alt="email" className="icons"></img>
          </a>
          <a href="/">
            <img src={cv} alt="resume" className="icons"></img>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
