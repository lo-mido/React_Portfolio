import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {  faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
// import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";



const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ffvrjne",
        "template_z2gd4vm",
        formRef.current,
        "15zk02nZC3_WjAZom",
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Resume</h2>
          <span><button> <a href="/images/resume.pdf">Download Resume Here </a></button></span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Open to Work Remote (anywhere in U.S.) or Hybrid in South Florida</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Languages & FrameWorks</h2>
          <span>
          {/* /* <FontAwesomeIcon icon={faHtml5} bounce style={{color: "#ffbb00",}} />  */}
            {/* <FontAwesomeIcon icon={faCss3Alt} bounce style={{color: "#ffbb00",}} />
            <FontAwesomeIcon icon={faSquareJs} bounce style={{color: "#ffdd00",}} />
            <FontAwesomeIcon icon={faReact} bounce style={{color: "#ffbb00",}} />
            <FontAwesomeIcon icon={faNodeJs} bounce style={{color: "#ffbb00",}} />
             </p> */}
       {/* <p> <FontAwesomeIcon icon={faSquareJs} style={{color: "#ffb30f",}} /></p>  */}
          </span>
          
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              // 86-98 copy code for phone icon
              
            />
            <FontAwesomeIcon icon={faPhoneVolume} style={{color: "#51511f",}} />
            {/* <FontAwesomeIcon icon={light("phone-volume")} size="2xl" style={{color: "#ffe224",}} />  */}
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;