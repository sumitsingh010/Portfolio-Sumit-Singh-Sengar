import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typewriter from "typewriter-effect";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Contact = () => (
  <section className="contacts" id="contacts">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact" />
    </h2>
    <h3 className="title" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
      <b className="site-contacts">
        <Typewriter
          options={{
            strings: ['Gmail', 'LinkedIn', 'Instagram', 'GitHub'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </b>
    </h3>

    {/* <div
      className="visme-embed"
      class="visme_d"
      data-title="Portfolio Feedback"
      data-url="01918y93-portfolio-feedback"
      data-domain="forms"
      data-full-page="false"
      data-min-height="500px"
      data-form-id="112288"
    >
      Feedback Form
      <script src="https://docs.google.com/forms/d/e/1FAIpQLSd0nBPuPsOT1ebgDr9JTXmOlO0-Crt59oMU38Ev4V3O33J48Q/viewform?usp=preview",
            "_blank"></script>
    </div> */}
    <div>
      <button
        onClick={() =>
          window.open(
           "https://docs.google.com/forms/d/e/1FAIpQLSd0nBPuPsOT1ebgDr9JTXmOlO0-Crt59oMU38Ev4V3O33J48Q/viewform?usp=preview",
            "_blank"
          )
        }
        className="visme-embed"
      >
        Give Your Valuable Feedback ! 📝
      </button>
    </div>
    <div className="icons">
      <a
        href="mailto:sengarsumit7047@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href="https://www.linkedin.com/in/sumitsingh010/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in"></span>
        </div>
        <div className="text">LinkedIn</div>
      </a>
      <a
        href="https://www.instagram.com/sumit_singh._.010?igsh=MXNjZDJ6MmRucmUzbQ=="
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-instagram"></span>
        </div>
        <div className="text">Instagram</div>
      </a>

      <a
        href="https://github.com/sumitsingh010"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
