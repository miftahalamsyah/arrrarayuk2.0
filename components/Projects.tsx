import type { NextPage } from "next";
import { IProjects } from "../typings";
import Github from "../assets/github.webp";
import Web from "../assets/www.webp";
import { useEffect, useState } from "react";
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';

interface IProjectsProps {
  projects: IProjects[];
}

export const Projects: NextPage<IProjectsProps> = ({ projects }) => {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    if (activeTag === "all") {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects?.filter(project =>
      project?.techStack?.some(tech =>
        tech?.text?.toLowerCase()?.includes(activeTag?.toLowerCase())
      )
    );

    setFilteredProjects(filtered);
  }, [activeTag, projects]);

  return (
    <>
      <h1 className="projects_heading">Materi</h1>
      <div className="projects_filter">
        <div className="projects_filter_cardsBox">
          {filteredProjects?.map(project => (
            <div key={project?.id} className="projects_filter_cardsBox_card">
              <img src={project?.image?.url} alt="" className="projects_filter_cardsBox_card_img" />
              <p className="projects_filter_cardsBox_card_title">{project?.title}</p>
              <div className="projects_filter_cardsBox_card_techStack">
                {project?.techStack?.map(stack => {
                  if (stack?.text?.toLowerCase() !== "all") {
                    return (
                      <span
                        key={stack?.text}
                        className="projects_filter_cardsBox_card_techStack_tech"
                      >
                        {stack?.text}
                      </span>
                    );
                  }
                })}
              </div>
              <p className="projects_filter_cardsBox_card_description">{project?.description}</p>
              <div className="projects_filter_cardsBox_card_links">
                {project?.demoLink && (
                  <button className="download" onClick={() => window.open(project?.demoLink, "_blank")}>Download</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
