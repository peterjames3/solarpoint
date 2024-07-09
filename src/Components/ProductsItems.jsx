import Button from "./Button";
import React, { useState } from "react";
import ProductsModal from "./ProductModal"

function ProductsItems({ img, name, desc, price }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const productDetails = { img, name, desc, price };
  return (
    <section className=" my-2 mx-auto min-h-[40rem] rounded-sm  max-w-5xl flex flex-col  font-Inter">
    <div className="h-[60%]  hover:scale-105 transform ease-in-out duration-300 cursor-pointer">
      <img src={img} loading="lazy" alt={name} className="object-fit w-full h-[19rem]" />
    </div>
    <div className="flex-grow px-2 space-y-2 text-center">
      <h2 className="text-3xl text-blue-700">{name}</h2>
      <p className="text-2xl">{desc}</p>
      <h3 className="text-2xl font-semibold">{price}</h3>
      {/* Pass the handleOpenModal to the Button component */}
      <Button onClick={handleOpenModal} />
      {/* Modal Component */}
      <ProductsModal isOpen={isModalOpen} onClose={handleCloseModal} product={productDetails} />
    </div>
  </section>
  );
}

export default ProductsItems;
