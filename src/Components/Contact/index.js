/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
// import { Link } from "react-router-dom";
import "./index.css";

// const Socials = ({ classname, url, icon, link_name }) => {
//   return (
//     <li>
//       <a href={url} className={(classname = "t-text-col")}>
//         <i className={icon}></i>
//         <span>{link_name}</span>
//       </a>
//     </li>
//   );
// };

const Contact = () => {
  const email = "daviesfatimah97@gmail.com";

  return (
    <div className="contact">
      <div className="contact-inner">
        <p className="contact-top">You’re always welcome to say hi! 😌</p>
        <p className="contact-bottom">
          If you’d like to work with me, discuss a project or just say hi, you
          candrop me an email - <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
};
export default Contact;
