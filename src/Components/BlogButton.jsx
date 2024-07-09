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
    <button onClick={handleClick} type="button" className=' w-[100%] xs:w-[30%] md:w-[35%] py-3  mt-5 text-white text-xl font-semibold bg-blue-700 md:py-3 md:px-8  lg:py-3 lg:px-10 cursor-pointer transition-all delay-300 hover:bg-black' >See More..</button>
  );
}

export default BlogButton;
