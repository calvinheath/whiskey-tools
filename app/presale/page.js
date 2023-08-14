// app/presale/page.js

'use client';

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, optimism, polygon, base, bsc, fantom, cronos, pulsechain } from "wagmi/chains";


import { useState, useEffect } from 'react';
import CoinHero from '../components/coinhero';
import Sidebar from '../components/sidebar';
import ConnectWallet from '../components/connectWallet';
import "../globals.css";
import "../styles/presale.css";
import WSKYABI from "../WSKYAbi.json";
import Image from 'next/image';
import beerClink from "../../public/icons/beerClink.png";
import Goals from '../components/goals';
import { getCountdown } from '../functions/getCountdown';
import { buyTokens } from '../functions/buyTokens';
import { refund } from '../functions/refund';
import { viewClaimableBalance } from '../functions/viewClaimableBalance';
import { fetchTotalRaised } from '../functions/fetchTotalRaised';
import Tokenomics from "../../public/Tokenomics.png"
const CONTRACT_ABI = WSKYABI;   
const CONTRACT_ADDRESS = '0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65';
const projectId = "f82c4364b5a9adf93d73dbef5950e0a2";
const chains = [arbitrum, mainnet, optimism, polygon, base, bsc, fantom, cronos, pulsechain];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function Presale() {
  const [web3, setWeb3] = useState(null);
  const [amount, setAmount] = useState('5000');
  const [bnbValue, setBnbValue] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  const [raisedInBnb, setraisedInBnb] = useState('3');
  const [claimableBalance, setClaimableBalance] = useState('0');
  const [progress, setProgress] = useState('10');
  const BNB_PRICE_USD = 240.18;
  const PRESALE_CAP_BNB = 200;
  const PRESALE_CAP_USD = PRESALE_CAP_BNB * BNB_PRICE_USD;
  const raisedUsd = parseFloat(raisedInBnb) * BNB_PRICE_USD;

  useEffect(() => {
    const updateBlockchainInfo = async () => {
        const raised = await fetchTotalRaised(web3, CONTRACT_ABI, CONTRACT_ADDRESS);
        setraisedInBnb(raised);
        const claimable = await viewClaimableBalance(web3, walletAddress, CONTRACT_ABI, CONTRACT_ADDRESS);
        setClaimableBalance(claimable);
        console.log(raisedInBnb, raisedUsd, claimableBalance);
    }

    updateBlockchainInfo();
    const intervalId = setInterval(updateBlockchainInfo, 5000);

    const targetDate = new Date(Date.UTC(new Date().getUTCFullYear(), 7, 31, 16, 0, 0));
    const countdownInterval = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownInterval);
    }
  }, [web3, walletAddress]);

  const [countdown, setCountdown] = useState('');

  const handleWskyChange = (e) => {
    const wskyAmount = e.target.value;
    setAmount(wskyAmount);
  
    const bnbEquivalent = (wskyAmount * 0.00008);
    setBnbValue(bnbEquivalent);
  };

  return (
    <div>
      <Sidebar />
      <div className='container'>
        <section className='presaleContainer hero'>
          <div className='presaleContent'>
          <h2>Say<span className='emojiHeading'><Image alt="Waving" width="100" height="100" src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png" unoptimized/></span>to hard tasks <br/> with Whiskey.Tools</h2>

            <p>We have an amazing presale going on.
                <br />
                Buy some now so you don&apos;t miss out <span className='emojiSubheading'><Image width="40" height="40" src={beerClink} unoptimized/></span>
            </p>
            <div className='buttonGroup'>
              <a href="https://bscscan.com/address/0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65#code" target='_blank'><button>View on BSCScan</button></a>
              <a href="https://twitter.com/whiskeytoolsai" target='_blank'><button>Twitter</button></a>
              <a href="https://t.me/whiskeytools"><button>Telegram</button></a>
            </div>
          </div>
          <div className='presaleCardContainer'>
          <div className='presaleCard'> 
            <h1>Purchase WSKY Here</h1>
            <p>{countdown}</p>

            {walletAddress ? (
              <div>
                <div className="progress-container">
                 <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <span>${raisedUsd.toFixed(2)} / ${PRESALE_CAP_USD}</span>
             </div>
                <form onSubmit={e => { e.preventDefault(); buyTokens(web3, bnbValue, walletAddress, CONTRACT_ABI, CONTRACT_ADDRESS); }}>
                  <label htmlFor="inputHeading"></label>
                  <input 
                    type="number" 
                    id="wskyAmount" 
                    name="WSKY Amount"
                    value={amount}
                    onChange={handleWskyChange} 
                    min="125"
                    placeholder='$WSKY'
                    step={5}
                    aria-valuemin={125}
                    aria-valuemax={62500}
                  />
                  <p>BNB: {bnbValue.toFixed(4)}<br/>(+ 0.0005 gas)</p>
                  <button type="submit">Confirm Purchase</button>
                </form>
                <div className='buttonGroup center'>
                  <button onClick={() => refund(web3, amount, walletAddress, CONTRACT_ABI, CONTRACT_ADDRESS)}>Refund</button>
                  <button onClick={() => viewClaimableBalance(web3, walletAddress, CONTRACT_ABI, CONTRACT_ADDRESS)} disabled>Claimable Balance: {claimableBalance} WSKY</button>
                </div>
              </div>
            ) : (
              <WagmiConfig config={wagmiConfig}>
          <ConnectWallet 
                onConnect={(web3Instance, address) => {
                  setWeb3(web3Instance);
                  setWalletAddress(address);
                }}
                onDisconnect={() => {
                  setWeb3(null);
                  setWalletAddress('');
                }}
              />
        </WagmiConfig>
              
            )}
          </div>
          </div>
        </section>
        <Goals/>
        <h2 className='sectionHeader'>Tokenomics</h2>

        <Image alt="WSKY Tokenomics" width="0" height="0" className="tokenomicsImg" style={{ width: '100%', height: 'auto' }} src={Tokenomics} unoptimized/>
        <h2 className='sectionHeader'>View Top Tokens</h2>

        <CoinHero />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

      </div>
    </div>
  );
}
