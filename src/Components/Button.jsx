// Button.js
import React from 'react';

function Button({ onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick} // Use the passed onClick function
        className='w-[13rem] my-4 mx-auto text-white bg-blue-700 px-6 py-4 hover:bg-black transition-colors delay-300 cursor-pointer font-inter font-semibold'
      >
        Order Now
      </button>
    </>
  );
}

export default Button;
