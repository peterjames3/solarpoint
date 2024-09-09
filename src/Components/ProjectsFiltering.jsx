import { useState } from "react";
import projectData from "../ProjectData"; 
import { useNavigate } from "react-router-dom";
import ProjectsListing from "./ProjectsListing";


const ProjectsFiltering = () => {
  const navigate = useNavigate();
  const activeStyle = {
 
    color: "#16a34a",
  };


  // State to manage the current filter type
  const [filter, setFilter] = useState("All");

  // Function to handle filtering logic
  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.type === filter);

  const handleViewDetails = (project) => {
    navigate(`/projects/${project.id}`, { state: project });
  };

  return (
    <section className="wrapper min-h-[10rem] px-5 py-10">
      <div className="mx-auto mt-1 grid max-w-[1300px] grid-cols-2 place-content-center gap-2 text-xl font-medium text-black ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
        {/* Filter Buttons */}
        {[
          "All",
          "Water Heater",
          "Borehole solarization",
          "Solar installation",
          "Solar repair and upgrade",
        ].map((type) => (
          <button
            key={type}
            style={filter === type ? activeStyle : null}
            className="hover:text-brandD"
            onClick={() => setFilter(type)}
          >
            {type === "All" ? "All" : type}
          </button>
        ))}
      </div>

      {/* Display filtered projects */}
      <div className="my-12 grid grid-cols-1 gap-5 ss:grid-cols-2 md:grid-cols-4">
        {filteredProjects.map((project) => (
          <ProjectsListing
            key={project.id}
            project={project}
            onClick={() => handleViewDetails(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsFiltering;
