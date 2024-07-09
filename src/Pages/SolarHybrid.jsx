import HybridHero from "../Components/HybridHero"
import Hybridmain from "../Components/Hybridmain"
import { motion } from "framer-motion"

function SolarHybrid() {
  return (
   <motion.section className="h-auto  w-full"
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opacity:0}}
   >
    <HybridHero />
    <Hybridmain />
   </motion.section>
  )
}

export default SolarHybrid
