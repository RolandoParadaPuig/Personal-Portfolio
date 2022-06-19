import React from "react";
import "./social.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
export const Social = () => {
  const socialObj = [
    {
      socialName: "Twitter",
      socialUrl: "",
      socialIcon: <AiFillTwitterSquare />,
    },
    {
      socialName: "Facebook",
      socialUrl: "",
      socialIcon: <AiFillFacebook />,
    },
    {
      socialName: "LinkedIn",
      socialUrl: "",
      socialIcon: <AiFillLinkedin />,
    },
    {
      socialName: "GitHub",
      socialUrl: "",
      socialIcon: <AiFillGithub />,
    },
    {
      socialName: "WhatsApp",
      socialUrl: "",
      socialIcon: <AiOutlineWhatsApp />,
    },
  ];
  return (
    <section id="social" className={"portfolio--social"}>
      <div>
        {socialObj.map((social) => {
          return (
            <a href={social.socialUrl}>
              {social.socialIcon}
              {social.socialName}
            </a>
          );
        })}
      </div>
    </section>
  );
};
