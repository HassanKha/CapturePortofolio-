import { React } from 'react';
import {About } from "../styles"
import styled from "styled-components";
import Toggle from "./Toggle"
import {AnimateSharedLayout} from "framer-motion"
import { useScroll } from './useScroll';
import { scrollReveal } from './../animation';

const FAQSeaction = () =>{

const [element , controls] = useScroll();

return (
<FAQ variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
<AnimateSharedLayout>
    <h2>Any Questions <span>FAQ</span></h2>
    <Toggle title="How do I Start ?">
   
        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, doloribus!</p>
        </div>
    

    </Toggle>
    <Toggle title="Daily Schedule">
   
        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, doloribus!</p>
        </div>
        
  
    </Toggle>
    <Toggle title="Diferrent Payment Methods">
   
        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, doloribus!</p>
        </div>
       
  
    </Toggle>
    <Toggle title="What Products do you offer.">

        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, doloribus!</p>
        </div>
        
  
    </Toggle>
   </AnimateSharedLayout>
</FAQ>

)

}

const FAQ = styled(About)`

display:block;
span {
    display: block;
}
h2 {
    padding-bottom: 0.2rem;
    font-weight: lighter;
}

.faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width:100%;
}

.Question {
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer {
padding: 2rem 0rem ;

p {
    padding: 1rem 0rem;
}

}

`

export default FAQSeaction;