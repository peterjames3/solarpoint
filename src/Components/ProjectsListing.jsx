import PropTypes from "prop-types";

const ProjectsListing = ({ project, onClick }) => {
  const { image, title } = project;
  return (
    <section onClick={onClick}>
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
    </section>
  );
};
ProjectsListing.propTypes = {
    project: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectsListing;

