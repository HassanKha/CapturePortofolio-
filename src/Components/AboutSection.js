import { React } from 'react';
import home1 from "../img/home1.png"
import {motion} from "framer-motion"
import {About , Description , Image,Hide} from "../styles"
import { TitleAnim ,Fade,photoAnim} from './../animation';
import Wave from "./Wave"

const AboutSection = () => {

const container = {
hidden : { x: 100 },
show : { x: 0 , transition: {duration : 0.75 , ease: "easeOut" , staggerChildren: 1 }}
}
    return (
        <About >
<Description >

<motion.div className="title">
<Hide>
<motion.h2  variants={TitleAnim}  >we work to make</motion.h2>

</Hide>
<Hide>
<motion.h2 variants={TitleAnim} >your <span >dreams</span> come </motion.h2>
</Hide>
<Hide>
<motion.h2 variants={TitleAnim} >true.</motion.h2>

</Hide>
</motion.div>
<motion.p variants={Fade} >Contact us for any photography or videography ideas that you have. we have professionals with amazing skills.</motion.p>
<motion.button variants={Fade}>Contact us</motion.button>
</Description>
<Image>
    <motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt="man with a camera"/>
</Image>
<Wave/>
        </About>
    )
}


//styles components



export default AboutSection;