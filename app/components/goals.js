import React from 'react';
import '../styles/goals.css';
import Image from 'next/image';
import handPointRight from "../../public/icons/handPointRight.png";
import placeHolderTokenIcon from "../../public/placeholderToken.png"
import Hush from "../../public/icons/Hush.png"
import WSKYIcon from "../../public/WSKYLogo.png"
import Confused from "../../public/icons/Confused.png"
import Curse from "../../public/icons/Curse.png"
import Rocket from "../../public/icons/Rocket.png"
import Pumpkin from "../../public/icons/Pumpkin.png"
import coderHuman from "../../public/icons/coderHuman.png"

const coinHero = () => {
    return (
     
      <section className="goalContainer">
        <div className='goal'>
        <Image className="goalImage" width="250" height="250" src={coderHuman}/>
                   <h2>Creative Phase</h2>
                
        </div>

        <div className='goal'>
        <Image className="goalImage" width="250" height="250" src={Rocket}/>
                   <h2>Launch Phase</h2>
                
        </div>

        <div className='goal'>
        <Image className="goalImage" width="250" height="250" src={Pumpkin}/>
                   <h2>Halloween Event</h2>
                
        </div>

        <div className='goal'>
        <Image className="goalImage" width="250" height="250" src={Hush}/>
                   <h2>What's Next?</h2>
                
        </div>

        

        
      </section>

    );
}

export default coinHero;
