import {useState} from "react";
import {motion} from "framer-motion";
import Links from "./Links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar =() => {
const [open,setOpen]=useState(false)
    const variants = {
        open:{
            clipPath: "circle(1200 at 50px 50px)", 
            transition:{
                type: "spring",
                stifness: 20
            }
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }
    // const sidebar=()=>{
    //     const [open,setOpen]=useState(false);
    // }
    // lines 31 and line 35 code for sidebar to open and close
    const handleClose=()=>{
        setOpen(false);
    };
    return (
        <motion.div className="sidebar"
        animate={open ? "open": "closed"} > 
        {open ?
        <motion.div onClick={handleClose}className="bg" variants={{variants}}>
            <Links/>
        </motion.div>
        :
        ""
    }
        
        <ToggleButton setOpen={setOpen}/>
        </motion.div>
 )   
};

export default Sidebar 