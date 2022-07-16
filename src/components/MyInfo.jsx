import React from "react";
import url from "../assets/profile.jpg";
const MyInfo = () => {
  return (
    <div className="my-info">
      <div className="img-wrapper">
        <img src={url} alt="" />
      </div>
      <div className="text-info">
        <h1>Mas'ud Ndatsu</h1>
        <p>Software Developer</p>
        <small className="mySite">
          <a
            href="https://dev-masud-portfolio.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            masudnda.dev
          </a>
        </small>
        <div className="btns">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdKPSFtTqlSckLHRRdBbgWBxLnNpNDlnbQMWVMtlFXdqDVpJGzVvqPvlZCmkVzHHbcnwScL"
            target="_blank"
          >
            <button className="btn email">
              <i className="bi bi-envelope" aria-hidden="true"></i>
              Email
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/mas-ud-ndatsu-2b29831aa/"
            target="_blank"
          >
            <button className="btn linkedin">
              <i className="bi bi-linkedin" aria-hidden="true"></i>
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
