import { useNavigate } from 'react-router-dom';

function AboutUsButton() {
  let navigate = useNavigate(); // Hook to get the navigate function

  function handleClick() {
    // Delay navigation by 1 seconds (1000 milliseconds)
    setTimeout(() => {
      navigate('/about'); // Use the navigate function to redirect after the delay
    }, 1000);
  }

  return (
    <button onClick={handleClick} type="button" className=' px-10 py-4 text-xl font-semibold text-white bg-blue-800 hover:bg-black transition-all delay-300' >Learn More </button>
  );
}

export default AboutUsButton;
