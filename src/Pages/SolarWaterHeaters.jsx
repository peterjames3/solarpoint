import WaterHeaterHero from "../Components/WaterHeaterHero"
import WaterHeaterMain from "../Components/WaterHeaterMain"
import { motion } from "framer-motion"
function SolarWaterHeaters() {
  return (
    <motion.section className="h-auto w-full" 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <WaterHeaterHero /> 
    <WaterHeaterMain />
  </motion.section>
  )
}

export default SolarWaterHeaters
