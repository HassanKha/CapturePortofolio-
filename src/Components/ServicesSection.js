import { React } from 'react';
//img icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
import {About , Description , Image} from "../styles"
import styled from "styled-components";
import { useScroll } from './useScroll';
import { scrollReveal } from './../animation';

const ServicesSection = () => {

const [element , controls] = useScroll();

return (
<Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>

    <Description>

        <Cards>
   <h2>High <span>quality</span> services</h2>
            <Card>
                <div className="icon">
        <img  src={clock}  alt=""
        />
        <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <div className="icon">
        <img  src={teamwork} alt="" />
        <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <div className="icon">
        <img  src={diaphragm} alt="" />
        <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <div className="icon">
        <img  src={money} alt="" />
        <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
        </Cards>
    </Description>
    <Image>
    <img src={home2} alt=""/>
    </Image>
</Services>

)

}

const Services = styled(About)`
h2 {
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`
const Cards = styled.div`
display: flex ;
flex-wrap: wrap;
@media (max-width: 1300px) {
    justify-content: center;
  }
`

const Card = styled.div`
flex-basis: 20rem;

.icon {
    display: flex;
    align-items: center;

    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
}


`


export default ServicesSection;