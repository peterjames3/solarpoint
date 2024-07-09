import React, { useState } from "react";

function LedsProducts({ img, name, desc, price }) {
  return (
  
    <div className= ' my-7 mx-auto min-h-[40rem] rounded-sm  max-w-5xl flex flex-col  font-Inter gap-5'>
    <div  className="h-[60%]  hover:scale-105 transforn ease-in-out duration-300 cursor-pointer" >
              <img src={img} loading="lazy" alt="Jackery" className="object-fit w-full h-full"/>
      </div>
      <div className="flex-grow px-2 space-y-2 text-center">
      <h2 className='text-3xl text-blue-700'>{name}</h2>
      <p className='text-2xl'>{desc}</p>
      <h3 className='text-2xl font-semibold'>{price}</h3>
         
      </div>
    </div>
   
  );
}

export default LedsProducts;
