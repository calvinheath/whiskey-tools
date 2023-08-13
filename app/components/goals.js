import React from 'react';
import '../styles/goals.css';
import Image from 'next/image';
import Hush from "../../public/icons/Hush.png";
import Rocket from "../../public/icons/Rocket.png";
import Pumpkin from "../../public/icons/Pumpkin.png";
import coderHuman from "../../public/icons/coderHuman.png";

const coinHero = () => {
    return (
     
      <section className="goalContainer">
        <div className='goal'>
        <Image alt="Developer" className="goalImage" width="250" height="250" src={coderHuman}/>
                   <h2>Creative Phase</h2>
                
        </div>

        <div className='goal'>
        <Image alt="Rocket" className="goalImage" width="250" height="250" src={Rocket}/>
                   <h2>Launch Phase</h2>
                
        </div>

        <div className='goal'>
        <Image alt="Pumpkin" className="goalImage" width="250" height="250" src={Pumpkin}/>
                   <h2>Halloween Event</h2>
                
        </div>

        <div className='goal'>
        <Image alt="Hush" className="goalImage" width="250" height="250" src={Hush}/>
                   <h2>What&apos;s Next?</h2>
                
        </div>

        
a
        
      </section>

    );
}

export default coinHero;
