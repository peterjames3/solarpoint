import cart from "../assets/green-blue-shopping-cart-yellow.jpg"


function ProductsIntro() {
  return (
    <section className="w-full mt-2 mx-auto bg-gradient-to-r from-slate-500 to-gray-800">
      <div className="max-w-[1440px] mt-0 mx-auto flex flex-col xs:flex-col  sm:flex-row gap-5 min-h-[30rem] pt-[5rem]  px-5 ">
      <div className="w-full sm:w-1/2 text-center sm:text-start space-y-3 ss:pt-5">
        <h1 className="text-4xl  sm:text-6xl  font-bold text-blue-700 py-5 underline mix-blend-difference">
          Shop Top Solar Products at Unmatched Prices
        </h1>
        <nav className="text-xl sm:text-2xl font-medium">
          <p className="leading-[1.5em]">
            Step into a greener future without stretching your budget. Our
            online solar panel shop is committed to making renewable energy
            accessible for all by offering the most competitive prices on the
            market. Experience cutting-edge technology that turns sunlight into
            electricity with incredible efficiency, all while enjoying
            significant savings.
          </p>
         
        </nav>
      </div>

      <div className=" w-full sm:w-1/2  rounded-md overflow-hidden py-3 ">
        <img src={cart} alt="cart" className="object-fill w-full h-full"/>
      </div>
      </div>
    </section>
  );
}

export default ProductsIntro;
