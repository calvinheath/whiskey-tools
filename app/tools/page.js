'use client';

import React from "react";
import { useAccount, useContractRead, WagmiConfig } from "wagmi";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import WSKYABI from "../WSKYAbi.json";
import { Web3Button, Web3Modal } from "@web3modal/react";
import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import Link from "next/link";
import '../styles/tools.css';
import '../globals.css';
import Image from "next/image";
const chains = [mainnet];
const projectId = "f82c4364b5a9adf93d73dbef5950e0a2";
const CONTRACT_ADDRESS = '0x6a96610a6c4d5d57087911e2431df780b7f20109';
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});

function Tools() {
  return (
    <div className="toolsContainer">
<h1>Browser Tools</h1>
      <div className="browserTools">
      
      <a href="#" className="toolCard">
      <Image className='toolImage' alt="Wizard" width="0" height="0" src="https://em-content.zobj.net/source/microsoft-teams/363/mage_1f9d9.png" unoptimized/>
      <div className="toolContent">
      <h2>Codeless Contract Wizard</h2>
      <p>{/*ChatGPT will generate a descrtiption for this tool*/} Coming Soon </p>
      </div>

      </a>    

      <a href="#" className="toolCard">
      <Image className='toolImage' alt="WhiskeyGPT" width="0" height="0" src="https://em-content.zobj.net/source/microsoft-teams/363/robot_1f916.png" unoptimized/>
      <div className="toolContent">
      <h2>Chat w/ WhiskeyGPT</h2>
      <p>{/*ChatGPT will generate a descrtiption for this tool*/} Coming Soon </p>
      </div>

      </a>  

      
    </div>
    <h1>Python Tools</h1>

      <div className="pythonTools">
      <a href="#" className="toolCard">
      <Image className='toolImage' alt="X Ray Scanner" width="0" height="0" src="https://em-content.zobj.net/source/microsoft-teams/363/x-ray_1fa7b.png" unoptimized/>
      <div className="toolContent">
      <h2>Contract Scanner/Auditor</h2>
      <p>{/*ChatGPT will generate a descrtiption for this tool*/} Coming Soon</p>
      </div>    </a>

    </div>
    </div>
  );
}

function UserClaimableBalance() {
  const { address, isConnecting } = useAccount();
  const { data: userTokenBalances, loading, error } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: WSKYABI,
    functionName: 'userTokenBalances',
    args: [address]
  });

  if (error) {
    return <div className="overlayContainer"><p>Connect Your Wallet to Access Tools and See Your Balance      
    </p><Web3Button /></div>;
  }

  if (isConnecting || !address) {
    return <div className="overlayContainer"><p>Connect Your Wallet to Access Tools and See Your Balance       
    </p><Web3Button /></div>;
  }

  const claimableBalance = parseFloat(userTokenBalances) / (10**18);
  if (claimableBalance >= 1000) {
    return <Tools />;
  } else {
    return <div className="overlayContainer"><p>You need at least 1,000 WSKY available to Claim to access the Tools. <br/><br/> Your current claimable balance is {claimableBalance} WSKY.</p>
     <Link href="/presale"><button>Get More $WSKY</button></Link></div>;
  }
}
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function ToolsPage() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <div className="container">
        <UserClaimableBalance />

      </div>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode="dark"
       themeVariables={{
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent-color': 'rgba(242.00000077486038, 0, 52.000000700354576, 1)',
    '--w3m-background-image': 'linear-gradient(0deg, rgba(242.00000077486038, 0, 52.000000700354576, 1) 0%,rgba(255, 184.95296269655228, 134.2292109131813, 0.5) 100%)',
    '--w3m-container-border-radius': '30px',
    '--w3m-background-border-radius': '20px',
    '--w3m-button-border-radius': '15px',
  }}/>
    </WagmiConfig>
  );
}
