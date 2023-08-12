import React from 'react';
import '../styles/coinhero.css';
import Image from 'next'
const coinHero = () => {
    return (
     
      <section className="coinHero">
        <div className='categoryContainer'>
            <h2>BASE Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                    <img className="tokenIcon sm" src="https://storage.top100token.com/images/37bc203f-18e9-471e-a883-63523173f039.webp"/>
                    <a href="#">SeekCoin <span className='emoji'>👉</span></a>
                    
                </div>
                
                <div className='tokenItem'>
                    <img className="tokenIcon sm" src="https://storage.top100token.com/images/37bc203f-18e9-471e-a883-63523173f039.webp"/>
                    <a href="#">Meta Token <span className='emoji'>👉</span></a>
                </div>
                
                <div className='tokenItem'>
                    <img className="tokenIcon sm" src="https://storage.top100token.com/images/37bc203f-18e9-471e-a883-63523173f039.webp"/>
                    <a href="#">SeekCoin <span className='emoji'>👉</span></a>
                </div>
               
                
            </div>
        </div>

        <div className='categoryContainer'>
            <h2>ETH Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                    <img className="tokenIcon sm" src="https://storage.top100token.com/images/37bc203f-18e9-471e-a883-63523173f039.webp"/>
                    <a href="#">SeekCoin</a>
                </div>
            </div>
        </div>

        <div className='categoryContainer'>
            <h2>BSC Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                    <img className="tokenIcon sm" src="https://storage.top100token.com/images/37bc203f-18e9-471e-a883-63523173f039.webp"/>
                    <a href="#">SeekCoin</a>
                </div>
            </div>
        </div> 
      </section>

    );
}

export default coinHero;
