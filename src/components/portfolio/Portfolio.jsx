import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MoveMate",
    img: "/images/movemate.png",
    desc: "MoveMate is a web application I developed with the vision of simplifying the process of moving heavy appliances. Much like the convenience of ride-sharing services, MoveMate connects users with reliable and skilled movers who specialize in handling and transporting bulky items. With an easy-to-use platform, users can request assistance for moving heavy appliances, ensuring a seamless and efficient experience. MoveMate strives to make heavy appliance transportation as effortless as possible, providing a reliable solution for those in need of professional moving assistance.",
    link: "https://movemate-rt-f78ed739ac18.herokuapp.com/"
  },
  {
    id: 2,
    title: "Note Taker",
    img: "/images/notesap.png",
    desc: "The NoteTaker app is a user-friendly and intuitive tool designed to streamline your note-taking experience. With a clean and minimalistic interface, it allows users to capture and organize their thoughts effortlessly. From quick ideas to detailed project notes, NoteTaker enables efficient note creation, editing, and categorization. Sync your notes seamlessly across devices and never miss a detail with this versatile and reliable note-taking companion.",
    link:"https://note-taker684-7cc43ea2c44c.herokuapp.com/",
  },
  {
    id: 3,
    title: "Coding Quiz",
    img: "/images/codingquiz.png",
    desc: "The JavaScript Coding Quiz Application is an interactive platform tailored for both novice and experienced developers to enhance their coding skills. With a sleek and user-friendly design, the app challenges users with a series of JavaScript-related questions, testing their knowledge in a gamified format. Featuring a timer, scoring system, and dynamic feedback, the application provides an engaging environment for users to assess and improve their JavaScript proficiency. Dive into the world of coding challenges and elevate your JavaScript expertise with this educational and enjoyable quiz experience.",
    link:"https://lo-mido.github.io/CodeQuizChallenge/",
  },
  {
    id: 4,
    title: "Weather App",
    img: "/images/weather.png",
    desc: "The WeatherApp is a JavaScript-powered application that brings real-time weather information and a 5-day forecast to your fingertips. With a clean and intuitive interface, users can effortlessly check the current weather conditions and receive accurate forecasts for the next five days. The app dynamically fetches data from a weather API, providing up-to-date and location-based insights. Whether planning for the week or staying informed about the current weather, the WeatherApp offers a seamless and visually appealing experience for users to stay ahead of the forecast.",
    link:"https://lo-mido.github.io/weather-dashboard-api-challange/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button><a href={item.link}>See Demo </a></button>
        </motion.div>
      </div>
    </div>
  </section>
);
};

const Portfolio = () => {
const ref = useRef();

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["end end", "start start"],
});

const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
});

return (
  <div className="portfolio" ref={ref}>
    <div className="progress">
      <h1>Featured Works</h1>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
    </div>
    {items.map((item) => (
         <Single item={item} key={item.id} />
         ))}
       </div>
     );
   };
   
   export default Portfolio;