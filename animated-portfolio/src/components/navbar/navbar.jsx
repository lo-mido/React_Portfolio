import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"

const Navbar = () => {
    return(
        <div className="navbar"> 
        {/* Sidebar */}
        <Sidebar/>  
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale: 0.5}}
             animate={{opacity:1, scale: 1}}
             transition={{duration:0.5}}
             className="name">
             Lourdes Dorvilus</motion.span>
            <div className="social">
            <a href="#"><i className="fa-brands fa-linkedin fa-beat"></i></a>
            <a href="#"><i className="fa-brands fa-github-alt fa-beat"></i></a>
            </div>
        </div>
        </div>
        
    )
};

export default Navbar