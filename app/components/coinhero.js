import React from 'react';
import '../styles/coinhero.css';
import Image from 'next/image';
import placeHolderTokenIcon from "../../public/placeholderToken.png"
import WSKYIcon from "../../public/WSKYLogo.png"
import Shrimp from "../../public/ShrimpToken.jpg"
import ZetosZES from "../../public/ZetosZES.png"

const coinHero = () => {
    return (
     
      <section className="coinHeroContainer">
        <div className='coinHero'>
        <div className='categoryContainer'>
            <h2>BASE Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                    <Image alt="Shhh. It's a secret." className="tokenIcon sm promoted" width="48" height="48" src="https://em-content.zobj.net/source/microsoft-teams/363/shushing-face_1f92b.png" unoptimized/>
                    <a href="#">Secret Coin (SCRT)<span className='emojiButton emoji'><Image alt="Shhh. It's a secret" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/shushing-face_1f92b.png" unoptimized/></span></a>
                    
                </div>
                
                <div className='tokenItem'>
                <Image alt="Placeholder" className="tokenIcon sm unverified" width="48" height="48" src={placeHolderTokenIcon}/>
                    <a href="#">SeekCoin (SEEK)<span className='emojiButton emoji'><Image alt="Hand Pointing Right" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/backhand-index-pointing-right_1f449.png" unoptimized/></span></a>
                </div>
                
                <div className='tokenItem'>
                <Image alt="Placeholder" className="tokenIcon sm unverified" width="48" height="48" src={placeHolderTokenIcon}/>
                    <a href="#">Fuji Swap (FUJI)<span className='emojiButton emoji'><Image alt="Hand Pointing Right" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/backhand-index-pointing-right_1f449.png" unoptimized/></span></a>
                </div>

                <div className='tokenItem'>
                <Image alt="Shrimp" className="tokenIcon sm basechain" width="48" height="48" src={Shrimp}/>
                    <a href="#">Shrimp (Shrimp)<span className='emojiButton emoji'><Image alt="Hand Pointing Right" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/backhand-index-pointing-right_1f449.png" unoptimized/></span></a>
                </div>
               
                
            </div>
        </div>

        <div className='categoryContainer'>
            <h2>ETH Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                <Image alt="Invalid" className="tokenIcon sm ethchain" width="48" height="48" src="https://em-content.zobj.net/source/microsoft-teams/363/thinking-face_1f914.png" unoptimized/>
                <a href="#">Secret Coin<span className='emojiButton emoji'><Image width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/shushing-face_1f92b.png" unoptimized/></span></a>
                </div>

                <div className='tokenItem'>
                <Image alt="Invalid" className="tokenIcon sm unverified" width="48" height="48" src="https://em-content.zobj.net/source/microsoft-teams/363/thinking-face_1f914.png" unoptimized/>
                <a href="#">Secret Coin<span className='emojiButton emoji'><Image width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/shushing-face_1f92b.png" unoptimized/></span></a>
                </div>
            </div>
        </div>

        <div className='categoryContainer'>
            <h2>BSC Network</h2>
            <div className='tokenList'>
                <div className='tokenItem'>
                <Image alt="Whiskey.Tools Token Icon" className="tokenIcon sm bscchain" width="48" height="48" src={WSKYIcon}/>
                    <a href="#">Whiskey.Tools<span className='emojiButton emoji'><Image alt="Hand Pointing Right" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/backhand-index-pointing-right_1f449.png" unoptimized/></span></a>
                </div>
                <div className='tokenItem'>
                <Image alt="Curse (Reported as Scam, Do Not Trade)" className="tokenIcon sm scam" width="48" height="48" src="https://em-content.zobj.net/source/microsoft-teams/363/face-with-symbols-on-mouth_1f92c.png" unoptimized/>
                    <a href="#">Scam Token (Not Supported)<span className='emojiButton emoji'><Image alt="Curse (Reported as Scam, Do Not Trade)" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/face-with-symbols-on-mouth_1f92c.png" unoptimized/></span></a>
                </div>
                <div className='tokenItem'>
                <Image className="tokenIcon sm bscchain" width="48" height="48" src={ZetosZES}/>
                    <a href="#">Zetos (ZES)<span className='emojiButton emoji'><Image alt="Hand Pointing Right" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/backhand-index-pointing-right_1f449.png" unoptimized/></span></a>
                </div>
            </div>
            
        </div>
        
        </div>
        <div className='colorLegend'>
            <h1>Color Legend</h1>
            <div className='legendColors'>

            <span className='unverified'>Unverified</span>

            <span className='ethchain'>Ethereum Chain (ETH)</span>

            <span className='bscchain'>Binance Smart Chain (BSC)</span>

            <span className='basechain'>Coinbase Chain (BASE)</span>

            <span className='scam'>Scam Token (STAY AWAY)</span>

            <span className='promoted'>Promoted (Paid to be boosted)</span>



            </div>
            
        </div>
        
      </section>

    );
}

export default coinHero;
