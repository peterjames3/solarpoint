import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectsListing = ({ project, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { image, title } = project;
  useEffect(() => {
    
    const timer = setTimeout(() => setIsLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <section onClick={onClick}>
      {isLoading ? (
        <div>
          <Skeleton height={212} />
          <Skeleton count={1} />
        </div>
      ) : (
        <div className="cursor-pointer text-white">
          <nav className="h-[15rem]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </nav>

          <p className="text-sm text-black">{title}</p>
        </div>
      )}
    </section>
  );
};
ProjectsListing.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectsListing;
