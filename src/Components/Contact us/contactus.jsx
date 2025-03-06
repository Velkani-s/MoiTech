import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import './contactus.css'
import Parallax from "parallax-js";


const contactus = () => {


//   var scene = document.getElementById('scene');
//   var parallaxInstance = new Parallax (scene,
//   {
//     relativeInput:true,
    
//   });
// parallaxInstance.friction(0.2, 0.2);
  return (
    <>
      <Header />
      <section className="content">
        <div className="text">
          Contact ourselves
        </div>
      </section>
      {/* <Footer/> */}
      </>
  );
};

export default contactus;
