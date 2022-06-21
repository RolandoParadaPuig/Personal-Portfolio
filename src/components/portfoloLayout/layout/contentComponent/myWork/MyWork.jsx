import React from "react";
import "./myWork.css";
import { useNavigate } from "react-router-dom";
export const MyWork = () => {
  const navigate = useNavigate();

  const works = [
    {
      key: 1,
      workImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/rolando-portfolio.appspot.com/o/work-images%2FAdviceGenerator.PNG?alt=media&token=1cd792eb-9491-4064-9ca0-5e8b9073e408",
      workTitle: "Advice Generator",
      workUrl: "/advice-generator",
      workDescriptiom: "Advice Generator Component with React.js and API Call",
      workTags: ["React", "HTML5", "CSS3", "API"],
      WorkGithub: "https://github.com/RolandoParadaPuig/advice-generator-app",
    },
    {
      key: 2,
      workImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/rolando-portfolio.appspot.com/o/work-images%2FexpencesChart.PNG?alt=media&token=06fb8836-8b7a-4de3-8417-1c40b7b03563",
      workTitle: "Expences Chart",
      workUrl: "/expences-chart",
      workDescriptiom:
        "Expences Chart Component with React.js and data from JSON",
      workTags: ["React", "HTML5", "CSS3", "JSON"],
      WorkGithub: "https://github.com/RolandoParadaPuig/expencesChartComponent",
    },
    {
      key: 3,
      workImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/rolando-portfolio.appspot.com/o/work-images%2FintroSection.PNG?alt=media&token=98ecf1fe-6c69-4c40-a23a-53b0994c6e4f",
      workTitle: "Intro Section",
      workUrl: "/intro-section",
      workDescriptiom:
        "Intro Section Component with React.js with dropdown nav",
      workTags: ["React", "HTML5", "CSS3", "nav"],
      WorkGithub: "https://github.com/RolandoParadaPuig/intro-section",
    },
    {
      key: 4,
      workImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/rolando-portfolio.appspot.com/o/work-images%2FtimeTracking.PNG?alt=media&token=28f838c6-4ab1-4f9a-aebb-3955e196296a",
      workTitle: "Time Tracking",
      workUrl: "/time-tracking",
      workDescriptiom:
        "Time Tracking Component with React.js and data from JSON",
      workTags: ["React", "HTML5", "CSS3", "JSON"],
      WorkGithub:
        "https://github.com/RolandoParadaPuig/time-tracking-dashboard",
    },
  ];

  return (
    <section id="work" className={"portfolio--work"}>
      <div className="work-grid-container">
        {works.map((work) => {
          return (
            <div key={work.key} className="work-page-container">
              <div className="work-page-image-container">
                <img
                  alt={`${work.workTitle} preview`}
                  className="work-page-image"
                  src={work.workImageUrl}
                />
              </div>
              <a href={work.workUrl} target="_blank">
                <h3 className="work-page-title">{work.workTitle}</h3>
              </a>
              <div className="work-page-tags-container">
                {work.workTags.map((tag) => {
                  return <div className="work-page-tags">#{tag}</div>;
                })}
              </div>
              <p className="work-page-description">{work.workDescriptiom}</p>
              <a
                clasName="work-page-gitHub"
                target={"_blank"}
                href={work.WorkGithub}
              >
                GitHub
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
