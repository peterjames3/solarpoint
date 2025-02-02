import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProjectsDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    title,
    image,
    content,
    client,
    year,
    type,
    otherImage1,
    otherImage2,
  } = location.state || {};
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <section className="min-h-[15rem] w-full px-5">
      <div className="wrapper space-y-10 pt-[10rem]">
        <h3 className="text-4xl font-semibold text-black">{title}</h3>
        <div className="items-center gap-16 space-y-4 sm:flex sm:space-y-0">
          <p>
            {" "}
            <strong>Client:</strong> {client} / <strong> Year: </strong> {year}{" "}
            / <strong>Type: </strong>
            {type}
          </p>
          <button onClick={handleGoBack} className="btn--primary">
            Go Back
          </button>
        </div>
        <div className="h-[40rem] w-full overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="w-full gap-5 sm:flex md:gap-10">
          <div className="w-full pt-5 sm:w-1/2">
            <p className="text-xl leading-10">{content}</p>
          </div>
          <div className="w-full gap-3 sm:w-1/2 md:flex">
            <img
              src={otherImage1}
              alt={title}
              loading="lazy"
              className="size-[15rem]"
            />
            <img
              src={otherImage2}
              alt={title}
              loading="lazy"
              className="size-[15rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetailsPage;
