// app/presale/page.js

'use client';
import "../globals.css";
import "../styles/presale.css";
import WSKYABI from "../WSKYAbi.json";
import Image from 'next/image';
import Goals from '../components/goals';
import Tokenomics from "../../public/Tokenomics.png"
import PresaleCard from "./presaleCard"; 
import Features from "../components/features";

const CONTRACT_ABI = WSKYABI;   
const projectId = "f82c4364b5a9adf93d73dbef5950e0a2";


export default function Presale() {

  return (
    <div>
      <div className='container'>
        <section className='presaleContainer hero'>
          <div className='presaleContent'>
          <h2>Say<span className='emojiHeading'><Image alt="Waving" width="100" height="100" src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png" unoptimized/></span>To $WSKY,<br/> Our Official Token</h2>

            <p>Our Presale for Whiskey.Tools is Live,
                <br />
                Get some now so you don&apos;t miss out!
            </p>
            <span className='contractspan'><span className='noSelect'>CA: </span>0x6a96610a6c4d5d57087911e2431df780b7f20109</span>
            <div className='buttonGroup'>
              <a href="https://etherscan.com/address/0x6a96610a6c4d5d57087911e2431df780b7f20109#code" target='_blank'><button>View on Etherscan</button></a>
              <a href="https://github.com/calvinheath/whiskey-tools"><button>Github Repo</button></a>
              <a href="https://twitter.com/whiskeytoolsai" target='_blank'><button>Twitter</button></a>
              <a href="https://t.me/whiskeytools"><button>Telegram</button></a>
              <a href="https://discord.gg/dbQ9SFZF5Y"><button>Discord</button></a>


            </div>
          </div>
          <PresaleCard/>
        </section>
        <Goals/>
        <Features/>
        <h2 className='sectionHeader'>Tokenomics</h2>

        <Image alt="WSKY Tokenomics" width="0" height="0" className="tokenomicsImg" style={{ width: '100%', height: 'auto' }} src={Tokenomics} unoptimized/>
      </div>
  </div>
  );
}

