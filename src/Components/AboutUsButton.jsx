import { useNavigate } from 'react-router-dom';

function AboutUsButton() {
  let navigate = useNavigate(); 

  function handleClick() {
  
    setTimeout(() => {
      navigate('/about'); 
    }, 1000);
  }

  return (
    <button onClick={handleClick} type="button" className=' btn--primary font-poppins' >Learn More </button>
  );
}

export default AboutUsButton;
