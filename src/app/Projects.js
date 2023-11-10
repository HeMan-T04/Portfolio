import { useState, useEffect } from 'react';
import { getProjects } from '../../sanity/sanity-utils';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id} className="Projects-card">
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#ffffff40]">
            <img
              className="w-full h-48 object-cover"
              src={project.image}
              alt="Project Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <span className="text-justify text-base">
                {project.description.map((block) => (
                  <p key={block._key} >{block.children[0].text}</p>
                ))}
              </span>
            </div>
            <div className="px-6 pt-4 pb-2">
              {project.hashtags.map((hashtag) => (
                <span
                  key={hashtag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{hashtag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
