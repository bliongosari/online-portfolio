import "./Home.css";
import profilePicture from "./images/background.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import github from "./images/github.png";
import email from "./images/email.png";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from "./Navbar";
import ProjectImages from "./ProjectImages";

function Home() {
  return (
    <div className="home">
      <section className="header">
        <Navbar></Navbar>
        <div className="containerPic">
          <img className="mypic" src={profilePicture} alt="pic"></img>
        </div>
        <h1 className="name"> BRANDON VINCENT </h1>
        <div className="line_title"></div>
        <h2 className="description">
          Web Developer/Software Engineer/Data Analyst{" "}
        </h2>
        <button className="readMore"> READ MORE </button>
      </section>
      <section className="aboutMe">
        <h1 className="title"> ABOUT ME</h1>
        <div class="line__aboutme"> </div>
        <div className="about__content">
          <div className="intro">
            <h2>
              Hi! My name is Brandon. I am a Software Engineer/Web
              Developer/Data Analyst. I am extremely detailed, logical, and keen
              in learning/adapting to new frameworks. I aim to always exceed
              client's expectations and create the best quality of work.
              Currently in my third year of my Computer Science degree, and open
              to any job opportunities
              (Internship/Part-time/Casual/Full-Time/Graduate).
            </h2>
            <div className="links">
              <a href="/">
                <img src={facebook} alt="facebook" className="icons"></img>
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" className="icons"></img>
              </a>
              <a href="/">
                <img src={github} alt="github" className="icons"></img>
              </a>
              <a href="/">
                <img src={email} alt="email" className="icons"></img>
              </a>
            </div>
          </div>
          {/* logos */}

          <div className="hobbies">
            <h1 className="hobbies_title"> PERSONAL INTERESTS</h1>
            <div class="line__interest"> </div>
            <h2>
              When I am not programming, I tend to spend my time on sports like
              fitness, basketball, tennis, e-sports, and chess. I love watching
              interesting videos, documentaries, movies, and all kinds of TV
              Shows. I have dreams of travelling the world and experiencing all
              kinds of culture around the world.
            </h2>
            <a href="/">
              {" "}
              <h2>View my picture gallery here </h2>
            </a>
          </div>
        </div>
      </section>
      <section className="qualifications">
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
      <section className="projects">
        <h1 className="title"> PROJECTS </h1>
        <div class="line__projects"> </div>
        <div className="projectContent">
          <div className="projectContainer">
            <div className="projectTitle">
              <ProjectImages></ProjectImages>
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
              <ProjectImages></ProjectImages>
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
              <ProjectImages></ProjectImages>
            </div>
            <div className="projectDescription">
              <h2> Cribbage Game </h2>
              <h3> Rrrrr</h3>
            </div>
          </div>

          <div className="projectContainer">
            <div className="projectTitle">
              <ProjectImages></ProjectImages>
            </div>
            <div className="projectDescription">
              <h2> Flappy Bird Game </h2>
              <h3> Rrrrr</h3>
            </div>
          </div>

          <div className="upcomingProjects">
            <h2> Upcoming Projects </h2>
            <ul>
              <li> Booking Services Web Application (Node.js, React) </li>
              <li> Shifts Manager Application (Swift)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contactMe">
        <h1 className="title"> CONTACT ME </h1>
        <div class="line__projects"> </div>
        <form>
          <label> First Name</label>
          <input type="firstname" name="firstname" value="First Name" />
          <label> Last Name</label>
          <input type="lastname" name="lastname" value="Last Name" />
          <br></br>
          <label> Email Address </label>
          <input type="email" name="email" value="Email Address" />
          <br></br>
          <label> Message </label>
          <input
            type="message"
            name="message"
            value="Enter your message here"
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
}

export default Home;
