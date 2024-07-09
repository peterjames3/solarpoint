import { useNavigate } from 'react-router-dom';

function ContactUsButton() {
  let navigate = useNavigate(); // Hook to get the navigate function

  function handleClick() {
    
    setTimeout(() => {
      navigate('/contact'); // Use the navigate function to redirect after the delay
    }, 1000);
  }

  return (
    <button onClick={handleClick} type="button" className="px-10 py-3  text-xl  font-semibold rounded-md text-white border hover:bg-black transition-all delay-300">Contact Us</button>
  );
}

export default ContactUsButton;
