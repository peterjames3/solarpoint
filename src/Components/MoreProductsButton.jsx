import { useNavigate } from 'react-router-dom';

function MoreProductsButton() {
  let navigate = useNavigate(); // Hook to get the navigate function

  function handleClick() {
    setTimeout(() => {
        navigate('/products'); // Use the navigate function to redirect
    }, 1000);
    
  }

  return (
    <button onClick={handleClick} type="button" className=" btn--primary ">More Products</button>
  );
}

export default MoreProductsButton;
