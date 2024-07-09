import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import Header from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhyUs from "../Components/WhyUs"
import Aboutsec from "../Components/Aboutsec"
import Blogsec from "../Components/Blogsec";
import ProductsSlider from "../Components/ProductsSlider";
import Projects from "../Components/Projects";
import Testimonials from  "../Components/Testimonial";
import Industryweserve from "../Components/Industryweserve";
import SolarSystem from "../Components/SolarSystem";
import OurSolutions  from  "../Components/OurSolutions";
import Whychoosesolar from '../Components/Whychoosesolar'
import { motion } from "framer-motion"


function Home() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[location])
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Header title="Solar Power Solutions" />
      <Hero /> 
      <Whychoosesolar /> 
      <WhyUs /> 
      <Aboutsec /> 
      <ProductsSlider /> 
      <OurSolutions /> 
      <Projects /> 
      <SolarSystem /> 
      <Industryweserve />
      <Testimonials />  
      <Blogsec /> 
      
    </motion.div>
  );
}

export default Home;
