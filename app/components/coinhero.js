
import React from 'react';
import tokens from '../tokens.json'; // Path to your JSON file
import Image from 'next/image';
import '../styles/coinhero.css';

const CoinHero = () => {
  const renderTokensByChain = (chain) => {
    return tokens
      .filter(token => token.chain === chain)
      .map((token, index) => (
        <div className='tokenItem' key={index}>
          <Image loading='lazy' alt={token.name} style={{objectFit: 'cover'}} className={`tokenIcon sm ${token.class}`} width="48" height="48" src={token.icon} unoptimized/>
          <a href={token.url}>{token.name} ({token.symbol})<span className='emojiButton emoji'><Image alt={token.name} width="24" height="24" src={token.emoji} unoptimized/></span></a>
        </div>
      ));
  };

  return (
    <section className="coinHeroContainer">
      <div className='coinHero'>
        <div className='categoryContainer'>
          <h2>BASE Network</h2>
          <div className='tokenList'>
            {renderTokensByChain('BASE')}
          </div>
        </div>
        <div className='categoryContainer'>
          <h2>ETH Network</h2>
          <div className='tokenList'>
            {renderTokensByChain('ETH')}
          </div>
        </div>
        <div className='categoryContainer'>
          <h2>BSC Network</h2>
          <div className='tokenList'>
            {renderTokensByChain('BSC')}
          </div>
        </div>
        
      </div> <div className='colorLegend'>
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
};

export default CoinHero;
