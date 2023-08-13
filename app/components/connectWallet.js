'use client';

import { useState } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';

function ConnectWallet({ onConnect, onDisconnect }) {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState('');

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: 'https://eth.llamarpc.com', // Ethereum
          56: 'https://bsc-dataseed.binance.org/', // Binance Smart Chain
          137: 'https://polygon.llamarpc.com', // Polygon
          8453: 'https://mainnet.base.org	', // BASE
          43114: 'https://avalanche-c-chain.publicnode.com', // Avalanche
        },
      },
    },
  };

  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
  
    const provider = await web3Modal.connect();
    const web3Instance = new Web3(provider);
  
    // Fetch accounts first
    const accounts = await web3Instance.eth.getAccounts();
    setAddress(accounts[0]);
    setWeb3(web3Instance);
  
    // Send a signature request to the user
    try {
      const message = "Please sign this message to confirm your identity.";
      await web3Instance.eth.personal.sign(message, accounts[0]);
      
    } catch (error) {
      console.error("User denied message signature:", error);
      // Handle this error as you see fit, e.g., notify the user, log it, etc.
    }
  
    if (onConnect) {
      onConnect(web3Instance, accounts[0]);
    }
  };
  

  const disconnectWallet = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    setWeb3(null);
    setAddress('');

    if (onDisconnect) {
      onDisconnect();
    }
  };

  return (
    <div className="connect-wallet">
      <button onClick={address ? disconnectWallet : connectWallet}>
        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
      </button>
    </div>
  );
}

export default ConnectWallet;
