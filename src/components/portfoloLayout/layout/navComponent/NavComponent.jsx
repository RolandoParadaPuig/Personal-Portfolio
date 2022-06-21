import React from "react";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import "./navComponent.css";
export const NavComponent = () => {
  return (
    <nav className="portfolio--nav-component">
      <ul id="navMenu" className="portfolio--nav-container-hidden">
        <li className="portfolio--nav-list-elem">
          <a className="portfolio--nav-elem" href="#about">
            <SiAboutdotme />
          </a>
        </li>
        <li className="portfolio--nav-list-elem">
          <a className="portfolio--nav-elem" href="#tecnologies">
            <BiWrench />
          </a>
        </li>
        <li className="portfolio--nav-list-elem">
          <a className="portfolio--nav-elem" href="#work">
            <MdWorkOutline />
          </a>
        </li>
        <li className="portfolio--nav-list-elem">
          <a className="portfolio--nav-elem" href="#contact">
            <AiOutlineMail />
          </a>
        </li>
        <li className="portfolio--nav-list-elem">
          <a className="portfolio--nav-elem" href="#social">
            <AiFillGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
};
