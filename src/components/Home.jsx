import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Sanjeet_Singh_Full_Stack.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "My Name is Sanjeet Singh",
        "I'm Full Stack Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Sanjeet_Singh_Full_Stack.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src="assets/hero/photo.jpg" alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;