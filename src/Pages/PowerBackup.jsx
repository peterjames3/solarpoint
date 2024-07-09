import AboutPowerBackup from '../Components/AboutPowerBackup'
import BackupPlans from '../Components/BackupPlans'
import PowerBackupHero from '../Components/PowerBackupHero'
import { motion } from "framer-motion"
import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
function PowerBackup() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [location])
  return (
    <motion.div className='w-full h-auto mt-10'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <PowerBackupHero />
        <AboutPowerBackup />  
        <BackupPlans />  
     
    </motion.div>
  )
}

export default PowerBackup
