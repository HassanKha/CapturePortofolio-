import { React , useState} from 'react';
import {motion }from "framer-motion"
import { Fade } from './../animation';
const Toggle = ({children,title}) => {

const [Toggle, setToggle] = useState(false);

    return (
        <motion.div layout className="Question" onClick={()=> { setToggle (!Toggle) }}>
            <motion.h4 layout>{title}</motion.h4>
      { Toggle ? children : ""}
      <div className="faq-line"></div>
        </motion.div>

    )
    }

    export default Toggle;