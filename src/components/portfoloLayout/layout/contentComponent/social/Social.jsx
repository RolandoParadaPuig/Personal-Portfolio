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
      socialUrl: "https://twitter.com/RolandoParadap",
      socialIcon: <AiFillTwitterSquare />,
      socialKey: 1,
    },
    {
      socialName: "Facebook",
      socialUrl: "https://www.facebook.com/RolandoPPuig/",
      socialIcon: <AiFillFacebook />,
      socialKey: 2,
    },
    {
      socialName: "LinkedIn",
      socialUrl: "https://www.linkedin.com/in/rolando-parada-puig/",
      socialIcon: <AiFillLinkedin />,
      socialKey: 3,
    },
    {
      socialName: "GitHub",
      socialUrl: "https://github.com/RolandoParadaPuig",
      socialIcon: <AiFillGithub />,
      socialKey: 4,
    },
    {
      socialName: "WhatsApp",
      socialUrl:
        "https://api.whatsapp.com/send?phone=584147494426&text=%20Hi,%20I'm%20interested%20in%20contacting%20you.",
      socialIcon: <AiOutlineWhatsApp />,
      socialKey: 5,
    },
  ];
  return (
    <section id="social" className={"portfolio--social"}>
      <div className={"portfolio--social-grid"}>
        {socialObj.map((social) => {
          return (
            <a
              key={`social-${social.socialKey}`}
              href={social.socialUrl}
              className={`portfolio--social-${social.socialName}`}
              target="_blank"
            >
              {social.socialIcon}
              {social.socialName}
            </a>
          );
        })}
      </div>
    </section>
  );
};
