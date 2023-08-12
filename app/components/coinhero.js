import React from 'react';
import '../styles/coinhero.css';
import Image from 'next/image';
import handPointRight from "../../public/icons/handPointRight.png";
import placeHolderTokenIcon from "../../public/placeholderToken.png"
const coinHero = () => {
    return (
     
      <section className="coinHero">
        <div className='categoryContainer'>
            <h2>BASE Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                    <Image className="tokenIcon sm" width="48" height="48" src={placeHolderTokenIcon}/>
                    <a href="#">SeekCoin<span className='emojiButton emoji'><Image width="24" height="24" src={handPointRight} unoptimized/></span></a>
                    
                </div>
                
                <div className='tokenItem'>
                <Image className="tokenIcon sm" width="48" height="48" src={placeHolderTokenIcon}/>
                    <a href="#">SeekCoin<span className='emojiButton emoji'><Image width="24" height="24" src={handPointRight} unoptimized/></span></a>
                </div>
                
                <div className='tokenItem'>
                <Image className="tokenIcon sm" width="48" height="48" src={placeHolderTokenIcon}/>
                    <a href="#">SeekCoin<span className='emojiButton emoji'><Image width="24" height="24" src={handPointRight} unoptimized/></span></a>
                </div>
               
                
            </div>
        </div>

        <div className='categoryContainer'>
            <h2>ETH Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                <Image className="tokenIcon sm" width="48" height="48" src={placeHolderTokenIcon}/>
                    <a href="#">SeekCoin<span className='emojiButton emoji'><Image width="24" height="24" src={handPointRight} unoptimized/></span></a>
                </div>
            </div>
        </div>

        <div className='categoryContainer'>
            <h2>BSC Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                <Image className="tokenIcon sm" width="48" height="48" src={placeHolderTokenIcon}/>
                    <a href="#">SeekCoin<span className='emojiButton emoji'><Image width="24" height="24" src={handPointRight} unoptimized/></span></a>
                </div>
            </div>
        </div> 
      </section>

    );
}

export default coinHero;
