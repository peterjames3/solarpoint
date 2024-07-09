import { useNavigate } from 'react-router-dom';

function MoreProductsButton() {
  let navigate = useNavigate(); // Hook to get the navigate function

  function handleClick() {
    setTimeout(() => {
        navigate('/products'); // Use the navigate function to redirect
    }, 1000);
    
  }

  return (
    <button onClick={handleClick} type="button" className="bg-blue-700 text-white text-bold py-3 px-8 text-xl font-Poppins cursor-pointer hover:bg-black transition-all delay-300">More Products</button>
  );
}

export default MoreProductsButton;
