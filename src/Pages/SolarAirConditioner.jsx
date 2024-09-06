import  SolarAirConditionerIntro  from '../Components/SolarAirConditionerIntro'
import SolarAirConditionerHero from "../Components/ SolarAirConditionerHero";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const SolarAirConditioner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar Water Purifiers | Solar Point System</title>
        <meta
          name="description"
          content="Discover our range of solar water heaters designed for efficiency and reliability. Explore solutions that meet all your water heating needs with solar energy."
        />
        <meta
          property="og:title"
          content="Solar Water Heaters | Solar Point System"
        />
        <meta
          property="og:description"
          content="Efficient and reliable solar water heaters for all your hot water needs. Learn more about our products and how they can save you energy and money."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/solarwaterheaters" // replace with your actual URL
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/solar-water-heater.jpg" // replace with a relevant image URL
        />
      </Helmet>
      <SolarAirConditionerIntro />
      <SolarAirConditionerHero />
    </motion.section>
  );
}

export default SolarAirConditioner
