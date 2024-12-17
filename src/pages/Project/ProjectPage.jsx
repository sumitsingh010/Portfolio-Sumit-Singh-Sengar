import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi language*/
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [stateModal1, setStateModal1] = useState(false);
  const [stateModal2, setStateModal2] = useState(false);
  const [stateModal3, setStateModal3] = useState(false);
  const [stateModal4, setStateModal4] = useState(false);
  const [stateModal5, setStateModal5] = useState(false);
  const [stateModal6, setStateModal6] = useState(false);
  const [stateModal7, setStateModal7] = useState(false);
  // const [stateModal8, setStateModal8] = useState(false);
  // const [stateModal9, setStateModal9] = useState(false);
  // const [stateModal10, setStateModal10] = useState(false);
  // const [stateModal11, setStateModal11] = useState(false);
  // const [stateModal12, setStateModal12] = useState(false);
  // const [stateModal13, setStateModal13] = useState(false);
  // const [stateModal14, setStateModal14] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="projects more-project" id="projects">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="site-web" defaultMessage="websites" />
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid ">
          <div className="projects__item">
            <button onClick={() => setStateModal1(!stateModal1)}>
              <img
                src={proyectsImg(`./Task Management Dashboard.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>

          <div className="projects__item">
            <button onClick={() => setStateModal2(!stateModal2)}>
              <img
                src={proyectsImg(`./Text Wizards.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal3(!stateModal3)}>
              <img
                src={proyectsImg(`./Cars.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal4(!stateModal4)}>
              <img
                alt="Business img"
                src={proyectsImg(`./business.png`)}
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal5(!stateModal5)}>
              <img
                src={proyectsImg(`./PasswordGenerator.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal6(!stateModal6)}>
              <img
                src={proyectsImg(`./Food Website.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal7(!stateModal7)}>
              <img
                src={proyectsImg(`./Paypal.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
        </section>
      </main>

      <Modal state={stateModal1} setState={setStateModal1}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./task mngmt.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-1-p1"
                  defaultMessage="Built a responsive Task Management Dashboard using React and Redux for state management."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-1-p2"
                  defaultMessage="The project includes robust CRUD (Create, Read, Update, Delete) operations for tasks, allowing users to manage their tasks effortlessly. The integration of Redux ensures centralized state handling, enhancing application scalability and maintainability."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://brandkiln.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal2} setState={setStateModal2}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./txt analyser tool.jpeg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-2-p1"
                  defaultMessage="Built a Text Analyzer with features to format text, including uppercase, lowercase, and clearing text."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-2-p2"
                  defaultMessage="The tool is enriched with advanced functionalities such as dark/light theme toggles, text-to-speech conversion, copying text, and estimating reading time."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://text-wizards.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal3} setState={setStateModal3}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./retro car.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-3-p1"
                  defaultMessage="Created a visually captivating Classic Car Project inspired by a retro theme using HTML, CSS, and JavaScript. The project showcases vintage cars with a nostalgic design, featuring vibrant retro color palettes, bold typography, and smooth transitions."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-3-p2"
                  defaultMessage="The project features smooth animations, and interactive hover effects. JavaScript enhances the experience with dynamic elements such as a carousel for browsing cars and responsive design to ensure compatibility across devices."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://classic-cars-love.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal4} setState={setStateModal4}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./businessModal1.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-4-p1"
                  defaultMessage="Developed a polished Business Agency Landing Page using HTML, CSS, and JavaScript."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-4-p2"
                  defaultMessage="The page is designed with a modern aesthetic, featuring a clean layout and intuitive navigation. Smooth card animations enhance the visual appeal, creating a dynamic browsing experience that captivates users and leaves a professional impression."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Business-Website/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal5} setState={setStateModal5}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./passtool.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-5-p1"
                  defaultMessage="Built a Password Generator Tool using HTML, CSS, and JavaScript, providing users with secure, randomized passwords effortlessly."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-5-p2"
                  defaultMessage="The Password Generator Tool includes features for generating passwords with lowercase, uppercase letters, numbers, symbols, and spaces. Additionally, it allows users to exclude duplicate characters, ensuring unique and strong passwords tailored to specific security needs."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Password-Generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal6} setState={setStateModal6}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./foodmenu.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-6-p1"
                  defaultMessage="Developed a Food Menu Website using HTML, CSS, and JavaScript, designed for a seamless user experience. The website showcases an interactive and visually appealing menu, enhancing user engagement through smooth navigation."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-6-p2"
                  defaultMessage="Fully responsive, the website adapts seamlessly to all screen sizes, ensuring smooth functionality across devices. CSS animations and JavaScript interactivity contribute to a fluid and engaging browsing experience for users."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Food-Website/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal7} setState={setStateModal7}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./paypal mod.jpg`)} alt="img" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-7-p1"
                  defaultMessage="Developed a PayPal Clone website using HTML, CSS, and JavaScript, featuring login and signup pages. The design is sleek and functional, mimicking PayPal’s interface with responsive layouts and smooth animations for an engaging user experience."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-7-p2"
                  defaultMessage="The website adjusts seamlessly to all screen sizes, ensuring compatibility across devices. JavaScript enhances interactivity, while CSS animations provide smooth transitions, creating a polished, user-friendly experience."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Paypal-clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
