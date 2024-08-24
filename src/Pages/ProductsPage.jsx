import { useState, useEffect } from "react";
import ProductsData from "../ProductsData";
import ProductsIntro from "../Components/ProductsIntro";
import BestSellingProducts from "../Components/BestSellingProducts";
import AccordionSection from "../Components/AccordionSection";
import ProductsItems from "../Components/ProductsItems";
import { motion } from "framer-motion";
/* import { useLocation } from "react-router-dom"; */
import { Helmet } from "react-helmet-async";

function ProductsPage() {
  /*  const location = useLocation(); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        item.category.toLowerCase().includes(value),
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handleCategoryFilter = (category) => {
    if (category === "All") {
      setFilteredData(ProductsData);
    } else {
      const filtered = ProductsData.filter(
        (item) => item.category === category,
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
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      default:
        return "grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
    }
  };

  let gridContainerClasses = `max-w-7xl mt-1 mx-auto grid items-center gap-5 ${getGridClass()}`;

  return (
    <motion.section
      className="flex w-full flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Our Products | SolarPoint System</title>
        <meta
          name="description"
          content="Discover our range of best-selling solar products including inverters, charge controllers, batteries, solar panels, and LEDs. Find the perfect products to meet your solar energy needs."
        />
        <meta
          name="keywords"
          content="Solar Products, Best Selling, Solar Inverters, Charge Controllers, Solar Batteries, Solar Panels, LEDs, SolarPoint System"
        />
        <link rel="canonical" href="https://kimgym.netlify.app/products" />
        <meta property="og:title" content="Our Products | SolarPoint System" />
        <meta
          property="og:description"
          content="Explore our top-quality solar products and find the best solutions to enhance your renewable energy setup. Visit SolarPoint System now!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimgym.netlify.app/products" />
        <meta
          property="og:image"
          content="https://kimgym.netlify.app/images/solar-products.jpg" // Replace with your actual image URL
        />
      </Helmet>
      <ProductsIntro />
      <BestSellingProducts />
      {/* Search and Filter Section */}
      <div className="mx-auto mb-4 flex flex-wrap items-center gap-2 px-5">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="rounded border-2 border-brandD p-3 text-xl outline-none"
        />
        {/* Filter Buttons */}
        <button
          onClick={() => handleCategoryFilter("All")}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryFilter("Inverters")}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Inverters
        </button>
        <button
          onClick={() => handleCategoryFilter("Charge controllers")}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Charge controllers
        </button>
        <button
          onClick={() => handleCategoryFilter("Batteries")}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Batteries
        </button>
        <button
          onClick={() => handleCategoryFilter("Solar Panel")}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Solar Panels
        </button>
        <button
          onClick={() => handleCategoryFilter("LEDs")}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          LEDs
        </button>
      </div>

      {/* Product Display Section - Apply dynamic classes here */}
      <div className={gridContainerClasses}>
        {currentItems.length > 0 ? (
          currentItems.map((item) => <ProductsItems key={item.id} {...item} />)
        ) : (
          <div className="col-span-full pt-10 text-3xl">No products found.</div>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredData.length > itemsPerPage && (
        <div className="mt-4 flex justify-center">
          {Array.from(
            { length: Math.ceil(filteredData.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 rounded border p-2 ${
                  i + 1 === currentPage ? "bg-textColor text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ),
          )}
        </div>
      )}

      <AccordionSection />
    </motion.section>
  );
}

export default ProductsPage;
