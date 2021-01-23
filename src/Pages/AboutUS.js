import { React } from 'react';

import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import FAQSeaction from "../Components/FAQSection"
import {motion} from "framer-motion"
import { pageAnimation } from './../animation';
import ScrollTop from './../Components/ScrollTop';

const AboutUS = () => {

return (
      <motion.div exit="exitt"
      variants={pageAnimation}
      initial="hidden"
      animate="show" >
    < AboutSection />
    <ServicesSection />
     <FAQSeaction />
     <ScrollTop/>
    </motion.div>
    )


}

export default AboutUS;