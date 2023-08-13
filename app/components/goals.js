import React from 'react';
import '../styles/goals.css';
import Image from 'next/image';


const coinHero = () => {
    return (
     
      <section className="goalContainer">
        <div className='goal'>
        <Image alt="Developer" className="goalImage" width="250" height="250" src="https://em-content.zobj.net/source/microsoft-teams/363/technologist_1f9d1-200d-1f4bb.png" unoptimized/>
                   <h2>Creative Phase</h2>
                
        </div>

        <div className='goal'>
        <Image alt="Rocket" className="goalImage" width="250" height="250" src="https://em-content.zobj.net/thumbs/240/twitter/348/rocket_1f680.png" unoptimized/>
                   <h2>Launch Phase</h2>
                
        </div>

        <div className='goal'>
        <Image alt="Pumpkin" className="goalImage" width="250" height="250" src="https://em-content.zobj.net/source/microsoft-teams/363/technologist_1f9d1-200d-1f4bb.png" unoptimized/>
                   <h2>Halloween Event</h2>
                
        </div>

        <div className='goal'>
        <Image alt="Hush" className="goalImage" width="250" height="250" src="https://em-content.zobj.net/source/microsoft-teams/363/shushing-face_1f92b.png" unoptimized/>
                   <h2>What&apos;s Next?</h2>
                
        </div>

        
a
        
      </section>

    );
}

export default coinHero;
