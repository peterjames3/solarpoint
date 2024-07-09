import React, {useEffect} from 'react'
import ContactHero from '../Components/ContactHero'
import OurContact from '../Components/OurContact'
import  ContactForm from "../Components/ContactForm"
import { motion } from "framer-motion"
import {useLocation } from  'react-router-dom'

function Contact() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [location])
  return (
    <motion.section className='w-full'
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <ContactHero />  
        <OurContact />  
        <ContactForm />
       
    </motion.section>
  )
}

export default Contact
