import React from 'react';
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter';

function BestSellingProducts(props) {
  const [typeEffect] = useTypewriter({
    words: [
      'Our Best selling',
      'Our Best quality',
      "Our most demanded",
    ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 50,
    cursor: Cursor.ALL,
  });

  return (
    <section className='max-w-6xl px-2 my-5 mx-auto'>
      <div className='w-full my-5'>
        <h4 className='text-5xl py-12 font-semibold text-black text-center sm:relative sm:after:bg-orange-500 sm:after:absolute sm:after:h-1 sm:after:w-0 sm:after:top-[10rem] md:after:top-[7rem] sm:after:left-0 sm:hover:after:w-full sm:after:transition-all after:duration-500  hover:cursor-pointer transition-all delay-300"'>Browse <span className='text-blue-700'>{typeEffect}</span> products</h4>
      </div>
 
    </section>
  );
}

export default BestSellingProducts;
