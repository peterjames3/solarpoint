import { useNavigate } from "react-router-dom";
function GetQuoteButton() {
  let navigate = useNavigate(); //
  function handleClick() {
    setTimeout(() => {
      navigate("/contact"); // Use the navigate function to redirect after the delay
    }, 1000);
  }
  return (
    <>
      <button
        onClick={handleClick}
        type="button" // Changed to "button" because this isn't submitting a form directly
        className=" btn--primary"
      >
        Get Quote
      </button>
    </>
  );
}

export default GetQuoteButton;
