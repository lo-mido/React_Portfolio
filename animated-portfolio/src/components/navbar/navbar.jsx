import "./navbar.scss";  

const Navbar = () => {
    return(
        <div className="navbar"> 
        {/* Sidebar */}
        <div className="wrapper">
            <span>LoMiDo</span>
            <div className="social"></div>
            <a href="#"><img src="/React_Portfolio/animated-portfolio/public/linkedin.png" alt="Logo of Linkedin" /></a>
            <a href="#"><img src="/GitHub-logo.png" alt="Logo of Git Hub" /></a>
        </div>
        </div>
        
    )
};

export default Navbar