import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { img, name, desc, price } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 2);

    // Convert price to a number
    let removedComma = price.split(",").join("");
    const updatedPrice = parseFloat(removedComma);

    // Update total cost whenever quantity or price changes
    if (!isNaN(updatedPrice)) {
      setTotalCost(updatedPrice * quantity);
    } else {
      console.error("Invalid price value:", price);
    }
  }, [price, quantity]);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) || newQuantity < 1 ? 1 : newQuantity); // Ensure quantity is at least 1
  };

  return (
    <section className="wrapper bg-cardBg grid grid-cols-1 gap-3 p-4 pt-[10rem] ss:grid-cols-2 md:grid-cols-3">
      <div>
        <img src={img} alt={name} className="max-h-96 w-full object-contain" />
      </div>
      <div className="pt-12">
        <h3 className="font-poppins text-3xl font-bold">{name}</h3>
        <p className="mt-4 font-Rubik text-lg">{desc}</p>
        <h4 className="mt-4 font-Rubik text-2xl font-semibold">
          Price: Ksh {price}
        </h4>
        <button className="btn--primary mt-10" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
      <div className="pt-10 ss:col-span-2 md:col-span-1">
        <div className="mt-2">
          <label
            htmlFor="quantity"
            className="block font-poppins text-2xl font-bold text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="mt-1 block w-full rounded-sm border border-brandD p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
          />
          <p className="mt-1 font-Rubik text-lg font-semibold text-gray-900">
            Total: Ksh {totalCost.toFixed(2)}
          </p>
        </div>
        <div className="mt-2 space-y-2 text-left">
          <h3 className="font-poppins text-xl font-bold">Steps for Payment:</h3>
          <ul className="ml-4 list-decimal space-y-1 font-Rubik">
            <li>
              Select &apos;Pay bill, Enter Business Number use 7116569&apos;.
            </li>
            <li>Select &apos;Enter Account Number&apos;.</li>
            <li>Enter Your Name.</li>
            <li>Press &apos;OK&apos;.</li>
            <li>Call us on 0703704062 to confirm your delivery location.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
