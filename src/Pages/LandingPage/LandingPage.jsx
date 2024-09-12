import React, { useEffect, useState } from 'react';
import mamaruka from '../../assets/Images/Nectar-Buzz/mamaruka.jpg';
import mrstan from '../../assets/Images/Nectar-Buzz/mr stanely.jpg';
import "./LandingPage.css"
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from '../../Components/Footer/Footer';
import Origin from '../../Components/Origin/Origin';
import FeaturesBox from '../../Components/Features/FeaturesBox';
import SeeMore from '../../Components/SeeMore/SeeMore';
import Benefit from '../../Components/Benefit/Benefit';
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre';
import Ourservice from '../../Components/OurService/Ourservice';
import LandingHero from '../../Components/LandingHero/LandingHero';


const LandingPage = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     Aos.init();
    // }, []);

    // const phrases = [
    //     "E SHOCK YOU!",
    //     "CAN'T BELIEVE THESE DEALS!",
    //     "AMAZING OFFERS JUST FOR YOU!",
    //     "EXCLUSIVE DISCOUNTS TODAY!",
    //     "SHOP NOW AND SAVE BIG!"
    // ];

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [phrases.length]);



    return (
        <div className='LandingPage'>
        {/*<HeaderAd/>*/}
        <LandingHero/>
      

      <FeaturesBox/>
      <WhoWeAre/>

      <div className="space"></div>

      <Ourservice/>


      
      

      <SeeMore/>

      <Benefit/>

      <div className="Stories">
        <h1>Top Stories From Consumers</h1>
        <div className="topStories">
          {/* <div className="story">
            <img src={mamaruka} alt="" className='person'/>
            <p>Locally Sourced and Sustainable:
               "I no dey use sugar, na honey i dey use pass but
                 this one wey una gimme so, as i use am drink my akamu
                 e just go well for my body." -Mummy Joy
            </p>
          </div> */}

          <div className="story" data-aos="zoom-in">
            <img src={mrstan} alt="" className='person'/>
            <p> "I love the variety of flavors Nectar Buzz offers. From classic 
                 honey to flavored options like manuka and raw honey, 
                 there's something for everyone." - Pa Stanley
            </p>
          </div>
        </div>
      </div>
     
      <Origin/>

      {/* <Footer/> */}
    </div>
    )
}

export default LandingPage