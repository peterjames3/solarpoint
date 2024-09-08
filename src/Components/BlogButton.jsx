import { useNavigate } from 'react-router-dom';

function BlogButton() {
  let navigate = useNavigate(); // Hook to get the navigate function

  function handleClick() {
    // Delay navigation by 1 seconds (1000 milliseconds)
    setTimeout(() => {
      navigate('/blog'); // Use the navigate function to redirect after the delay
    }, 1000);
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="btn mt-5 w-[100%] font-semibold transition-all delay-300 hover:text-white xs:w-[30%] md:w-[30%] md:px-8 lg:px-10 lg:py-3"
    >
      See More..
    </button>
  );
}

export default BlogButton;
