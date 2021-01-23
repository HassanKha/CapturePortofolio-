import { React } from 'react';
import styled from "styled-components"
import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import { pageAnimation , Fade , photoAnim , LineAnim , slider,sliderContainer} from "../animation";
import  {useScroll}  from '../Components/useScroll';
import ScrollTop from './../Components/ScrollTop';

const OurWork = () => {
    const [element , controls] = useScroll();
    const [element2 , controls2] = useScroll();
return(
    <Work 
    style={{background:"#fff"}}
    exit="exitt"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    
    >
        <motion.div variants={sliderContainer} >
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie >
        <motion.h2 variants={Fade}>The Athlete</motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

        <Movie variants={Fade} initial="hidden" ref={element} animate={controls}>
            <h2>The Racer</h2>
            <motion.div variants={LineAnim} className="line"></motion.div>
            <Link to="/work/the-racer">
                
            <img src={theracer} alt="theracer"/>
            </Link>
        </Movie>
        <Movie variants={Fade} initial="hidden" ref={element2} animate={controls2}>
            <h2>Good Times</h2>
            <motion.div variants={LineAnim} className="line"></motion.div>
            <Link to="/work/good-times" >
            <img src={goodtimes} alt="goodtimes"/>
            </Link>
        </Movie>
        <ScrollTop/>
    </Work>
)

}

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding: 1rem 0rem;
}

`
const Movie = styled(motion.div)`
padding-bottom: 10rem;

.line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem
}

img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`
const Hide = styled.div`
overflow:hidden;
`
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;