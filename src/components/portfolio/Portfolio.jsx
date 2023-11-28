import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MoveMate",
    img: "/images/movemate.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://github.com/lo-mido/"
  },
  {
    id: 2,
    title: "Note Taker",
    img: "/images/notesap.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link:"https://github.com/lo-mido/",
  },
  {
    id: 3,
    title: "Coding Quiz",
    img: "/images/codingquiz.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link:"https://github.com/lo-mido/",
  },
  {
    id: 4,
    title: "Weather App",
    img: "/images/weather.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link:"https://github.com/lo-mido/",
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