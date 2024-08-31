import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react'

const ProjectsDetailsPage = () => {
    
     
    const location = useLocation();
    const navigate = useNavigate();

     const { title, image, content, client, year, type, otherImage1, otherImage2 } =
       location.state || {};
      const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
      };
       useEffect(() => {
         window.scrollTo(0, 0);
       }, [location]);
  return (
    <section className="min-h-[15rem] w-full">
      <div className="wrapper space-y-10 pt-[10rem]">
        <h3 className="text-4xl font-semibold text-black">{title}</h3>
        <div className="flex">
          <p>
            {" "}
            <strong>Client:</strong> {client} / <strong> Year: </strong> {year}{" "}
            / <strong>Type: </strong>
            {type}
          </p>
        </div>
        <img src={image} alt={title} loading="lazy" />
        <div className="grid grid-cols-1 gap-10 ss:grid-cols-2">
          <div className="pt-5">
            <p className="text-xl leading-10">{content}</p>
          </div>
          <div className="flex gap-3">
            <img src={otherImage1} alt={title}  loading="lazy" className="size-[15rem]"/>
            <img src={otherImage2} alt={title}  loading="lazy" className="size-[15rem]"/>
          </div>
        </div>
        <button onClick={handleGoBack} className="btn--primary">
          Go Back
        </button>
      </div>
    </section>
  );
}

export default ProjectsDetailsPage
