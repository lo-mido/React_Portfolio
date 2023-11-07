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
             >
             Lourdes Dorvilus</motion.span>
            <div className="social"></div>
            <a href="#"><img src="/linkedin.png" alt="Logo of Linkedin" /></a>
            <a href="#"><img src="/GitHub-logo.png" alt="Logo of Git Hub" /></a>
        </div>
        </div>
        
    )
};

export default Navbar