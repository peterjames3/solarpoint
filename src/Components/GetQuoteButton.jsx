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
        className="bg-blue-700 text-white font-Inter font-semibold py-3 w-full px-5 cursor-pointer hover:bg-blue-900 transition-all delay-300"
      >
        Get Quote
      </button>
    </>
  );
}

export default GetQuoteButton;
