import React from "react";
import "./Footer.css";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fetch current year
  let fetchYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-info"
              defaultMessage="Page created by sumitsingh010"
            />
          </p>
          <p>&copy; {fetchYear}. All Rights Reserved.</p>
        </div>
        <div className="social-networks">
          <a
            href="https://www.linkedin.com/in/sumitsingh010/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sumitsingh010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/sumit_singh._.010?igsh=MXNjZDJ6MmRucmUzbQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
