// app/presale/page.js

'use client';

import { useState, useEffect } from 'react';
import CoinHero from '../components/coinhero';
import Sidebar from '../components/sidebar';
import ConnectWallet from '../components/connectWallet';
import "../globals.css";
import "../styles/presale.css";
import WSKYABI from "../WSKYAbi.json";
import Image from 'next/image';
import handWaving from "../../public/icons/handWaving.png"
import beerClink from "../../public/icons/beerClink.png"
import Goals from '../components/goals'
const CONTRACT_ABI = WSKYABI;   
const CONTRACT_ADDRESS = '0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65';

export default function Presale() {
  const [web3, setWeb3] = useState(null);
  const [amount, setAmount] = useState('');
  const [bnbValue, setBnbValue] = useState(0);  // To store the equivalent BNB value
  const [walletAddress, setWalletAddress] = useState('');
  const [raisedInBnb, setraisedInBnb] = useState('3');

  const [claimableBalance, setClaimableBalance] = useState('0');
  const [progress, setProgress] = useState('10');  // This will store the progress percentage
  const BNB_PRICE_USD = 240.18;
  const PRESALE_CAP_BNB = 200;  // Your goal in BNB
  const PRESALE_CAP_USD = PRESALE_CAP_BNB * BNB_PRICE_USD;
  const raisedUsd = parseFloat(raisedInBnb) + 4.5 * BNB_PRICE_USD;

  useEffect(() => {
    const updateBlockchainInfo = async () => {
        await fetchTotalRaised();
        await viewClaimableBalance();
        console.log(raisedInBnb, raisedUsd, claimableBalance);
    }

    updateBlockchainInfo();
    const intervalId = setInterval(updateBlockchainInfo, 5000);

    const countdownInterval = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownInterval);
    }
  }, [web3, walletAddress]);
  
  const [countdown, setCountdown] = useState('');
  const targetDate = new Date(Date.UTC(new Date().getUTCFullYear(), 7, 31, 16, 0, 0));  // Note: Month is 0-indexed, so 7 is August
  const getCountdown = () => {
    const now = new Date();
    const timeDiff = targetDate - now;

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const handleWskyChange = (e) => {
    const wskyAmount = e.target.value;
    setAmount(wskyAmount);
  
    const bnbEquivalent = (wskyAmount * 0.00008);  // Convert WSKY to BNB
    setBnbValue(bnbEquivalent);
  };
  

  function buyTokens() {
    if (!web3 || !bnbValue) return;  // Ensure that web3 and bnbValue are available before proceeding
  
    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  
    contractInstance.methods.buyTokens().send({
      from: walletAddress,
      value: web3.utils.toWei(bnbValue.toString(), 'ether')
    });
  }
  


  function refund(wskyAmount) {
    if (!web3) return;  // Ensure that web3 is available before proceeding
    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

    contractInstance.methods.Refund(wskyAmount).send({ from: walletAddress });
  }

  async function viewClaimableBalance() {
    if (!web3) return;  // Ensure that web3 is available before proceeding
    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  
    const balanceInWei = await contractInstance.methods.userTokenBalances(walletAddress).call();
    const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
    setClaimableBalance(balanceInEther);
  }

  
  async function fetchTotalRaised() {
    if (!web3) return;  // Ensure that web3 is available before proceeding
    
    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    const raisedInWei = await contractInstance.methods.totalRaised().call();
    const raisedInBnb = web3.utils.fromWei(raisedInWei, 'ether');  // Convert Wei to BNB
    setraisedInBnb(raisedInBnb);

    const progressPercentage = (parseFloat(raisedInBnb) / parseFloat(PRESALE_CAP_BNB)) * 10;
    setProgress(progressPercentage + 10);
  }

  return (
    <div>
      <Sidebar />
      <div className='container'>
        <section className='presaleContainer hero'>
          <div className='presaleContent'>
          <h2>Say<span className='emojiHeading'><Image width="100" height="100" src={handWaving} unoptimized/></span>to hard tasks <br/> with Whiskey.Tools</h2>

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
          <div className='presaleCard'> 
            <h1>Purchase WSKY Here</h1>
            <p>{countdown}</p>

            

  {walletAddress ? (
              <div>
                <div className="progress-container">
                 <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <span>${raisedUsd.toFixed(2)} / ${PRESALE_CAP_USD}</span>
             </div>
                <form onSubmit={e => { e.preventDefault(); buyTokens(); }}>
                  <label htmlFor="inputHeading"></label>
                  <input 
                    type="number" 
                    id="wskyAmount" 
                    name="WSKY Amount"
                    value={amount}
                    onChange={handleWskyChange} 
                    min="125"  // Minimum WSKY to buy
                    placeholder='$WSKY'
                  />
                  <p>BNB: {bnbValue.toFixed(4)}<br/>(+ 0.0005 gas)</p>
                  <button type="submit">Confirm Purchase</button>
                </form>
                <div className='buttonGroup center'>
                  <button onClick={() => refund(amount)}>Refund</button>
                  <button onClick={viewClaimableBalance} disabled>Claimable Balance: {claimableBalance} WSKY</button>
                </div>
              </div>
            ) : (
              // If wallet is not connected
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
            )}

           
          </div>
        </section>
        <Goals/>
        <h2 className='sectionHeader'>View Top Tokens</h2>

        <CoinHero />

        <footer className="footer">
          <p>&copy; 2023 Whiskey.Tools. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
