import React, { useState, useEffect } from "react";
import ProductsData from "../ProductsData";
import ProductsIntro from "../Components/ProductsIntro";
import BestSellingProducts from "../Components/BestSellingProducts";
import AccordionSection from "../Components/AccordionSection";
import ProductsItems from "../Components/ProductsItems";
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
 
function ProductsPage() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [location])
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(ProductsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Updated to display 9 items per page

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    filterProducts(value);
  };

  const filterProducts = (value) => {
    const filtered = ProductsData.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.desc.toLowerCase().includes(value) ||
        item.price.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handleCategoryFilter = (category) => {
    if (category === "All") {
      setFilteredData(ProductsData);
    } else {
      const filtered = ProductsData.filter(
        (item) => item.category === category
      );
      setFilteredData(filtered);
    }
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  // Dynamically adjust grid based on the number of items to display
  const getGridClass = () => {
    switch (currentItems.length) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      default:
        return 'grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-3';
    }
  };

 let gridContainerClasses = `max-w-7xl mt-1 mx-auto grid items-center gap-5 ${getGridClass()}`;


  return (
    <motion.section className="w-full flex flex-col"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <ProductsIntro />
      
      <BestSellingProducts />
      {/* Search and Filter Section */}
      <div className="flex flex-wrap items-center gap-2 mb-4 mx-auto px-5">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="outline-none text-xl p-3 border-2 border-blue-500 rounded"
        />
        {/* Filter Buttons */}
        <button
          onClick={() => handleCategoryFilter("All")}
          className="p-3 text-xl border-2 border-blue-500  rounded hover:bg-black hover:border-black hover:text-white transition-all delay-200"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryFilter("Inverters")}
          className="p-3 text-xl border-2 border-blue-500  rounded hover:bg-black hover:border-black hover:text-white transition-all delay-200"
        >
          Inverters
        </button>
        <button
          onClick={() => handleCategoryFilter("Charge controllers")}
          className="p-3 text-xl border-2 border-blue-500  rounded hover:bg-black hover:border-black hover:text-white transition-all delay-200"
        >
          Charge controllers
        </button>
    
        <button
          onClick={() => handleCategoryFilter("Batteries")}
          className="p-3 text-xl border-2 border-blue-500  rounded hover:bg-black hover:border-black hover:text-white transition-all delay-200"
        >
          Batteries
        </button>
        <button
          onClick={() => handleCategoryFilter("Solar Panel")}
          className="p-3 text-xl border-2 border-blue-500  rounded hover:bg-black hover:border-black hover:text-white transition-all delay-200"
        >
          Solar Panels
        </button>
        <button
          onClick={() => handleCategoryFilter("LEDs")}
          className="p-3 text-xl border-2 border-blue-500  rounded hover:bg-black hover:border-black hover:text-white transition-all delay-200"
        >
          LEDs
        </button>
      </div>

      {/* Product Display Section - Apply dynamic classes here */}
       <div className={gridContainerClasses}>
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <ProductsItems key={item.id} {...item} />
          ))
        ) : (
          <div className="col-span-full text-3xl pt-10">No products found.</div>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`p-2 border rounded mx-1 ${
                i + 1 === currentPage ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <AccordionSection />
    </motion.section>
  );
}

export default ProductsPage;
