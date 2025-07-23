import React from "react";
import "./ServicesPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Accordion from "./Accordion";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
        <section className="services" id="services">
          <h2 className="heading">
            <FormattedMessage id="services" defaultMessage="Services" />
          </h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-code"></i>
              <h3>
                <FormattedMessage
                  id="DSA"
                  defaultMessage="Data Structures & Algorithms"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="DSA-info"
                  defaultMessage="I excel at developing efficient solutions to complex problems, backed by hands-on experience solving 250+ Data Structures and Algorithms questions across diverse platforms."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>
                <FormattedMessage
                  id="development"
                  defaultMessage="Web development"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="development-info"
                  defaultMessage="Designing well-structured, responsive web pages with visually appealing color palettes and seamless interactions that enhance user satisfaction and engagement."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-database"></i>
              <h3>
                <FormattedMessage
                  id="backend"
                  defaultMessage="Digital backend"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="backend-info"
                  defaultMessage="Comprehensive maintenance of web pages, including error detection and resolution, content updates, design enhancements, and integration of new features."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage
                  id="maintenance"
                  defaultMessage="Web maintenance"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="social-media-info"
                  defaultMessage="End-to-end website maintenance encompassing error resolution, content and media updates, design refinement, and seamless integration of new functionalities."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-user"></i>
              <h3>
                <FormattedMessage
                  id="CleanCode"
                  defaultMessage="Web positioning (SEO)"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="cleancode-info"
                  defaultMessage="Search engine optimization (SEO) to strategically position your website among top search results on Google, Bing, and other major search engines, tailored to your business goals."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
              <i className="fas fa-tachometer-alt"></i>
              <h3>
                <FormattedMessage
                  id="optimization"
                  defaultMessage="Website optimization"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="website-optimization-info"
                  defaultMessage="Comprehensive website optimization focused on enhancing loading speed, utilizing optimized images, and implementing clean URLs to deliver a seamless and engaging user experience."
                />
              </p>
            </div>
          </div>
        </section>

        <section className="questions">
          <h2 className="heading">
            <FormattedMessage
              id="services-questions"
              defaultMessage="Frequent questions"
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-1"
                  defaultMessage="Why is website performance optimization important?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p1"
                  defaultMessage="Website performance optimization improves loading speed, enhances user experience, reduces bounce rates, and boosts search engine rankings—making your site more effective and engaging across all devices."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-2"
                  defaultMessage="How do Domain and Hosting work together?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p2"
                  defaultMessage="The domain acts as your website’s address, while hosting is the server where your website's content lives. Together, they allow users to access your site through a browser seamlessly."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-3"
                  defaultMessage="Why is ongoing website maintenance important?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p3"
                  defaultMessage="Ongoing maintenance ensures your website stays updated, secure, and fully functional. It helps improve performance, keeps content relevant, and supports better search engine visibility over time."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4"
                  defaultMessage="What payment methods are available?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4"
                  defaultMessage="We accept secure online payments via credit cards, debit cards, and bank transfers for your convenience."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
