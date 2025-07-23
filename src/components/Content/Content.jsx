import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="conntent">
    <ParticleHeaderBg />
    <section className="home" id="home">
      <div className="title">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage id="name" defaultMessage="I am Sumit Singh Sengar" />
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage id="role" defaultMessage="Frontend developer" />
        </p>

        <div className="wrapper">
          <a
            className="button"
            href="https://www.linkedin.com/in/sumitsingh010/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="button"
            href="https://github.com/sumitsingh010"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://www.instagram.com/sumit_singh._.010?igsh=MXNjZDJ6MmRucmUzbQ=="
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
          <a
            className="button"
            href="mailto:sengarsumit7047@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fas fa-envelope"></i>
            </div>
            <span>Gmail</span>
          </a>
        </div>

        <Link to="about-me" href="#about-me">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
