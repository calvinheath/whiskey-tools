// app/presale/page.js

'use client';
import CoinHero from '../components/coinhero';
import Sidebar from '../components/sidebar';
import "../globals.css";
import "../styles/presale.css";
import WSKYABI from "../WSKYAbi.json";
import Image from 'next/image';
import beerClink from "../../public/icons/beerClink.png";
import Goals from '../components/goals';
import Tokenomics from "../../public/Tokenomics.png"
import PresaleCard from "./presaleCard"; 

const CONTRACT_ABI = WSKYABI;   
const projectId = "f82c4364b5a9adf93d73dbef5950e0a2";


export default function Presale() {

  return (
    <div>
    <Sidebar />
      <div className='container'>
        <section className='presaleContainer hero'>
          <div className='presaleContent'>
          <h2>Say<span className='emojiHeading'><Image alt="Waving" width="100" height="100" src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png" unoptimized/></span>To $WSKY,<br/> Our Official Token</h2>

            <p>Our Presale for Whiskey.Tools is Live,
                <br />
                Get some now so you don&apos;t miss out!
            </p>
            <p>Contract Address: 0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65</p>
            <div className='buttonGroup'>
              <a href="https://bscscan.com/address/0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65#code" target='_blank'><button>View on BSCScan</button></a>
              <a href="https://t.me/whiskeytools"><button>Github Repo</button></a>
              <a href="https://twitter.com/whiskeytoolsai" target='_blank'><button>Twitter</button></a>
              <a href="https://t.me/whiskeytools"><button>Telegram</button></a>

            </div>
          </div>
          <PresaleCard/>
        </section>
        <Goals/>
        <h2 className='sectionHeader'>Tokenomics</h2>

        <Image alt="WSKY Tokenomics" width="0" height="0" className="tokenomicsImg" style={{ width: '100%', height: 'auto' }} src={Tokenomics} unoptimized/>
        <h2 className='sectionHeader'>View Top Tokens</h2>

        <CoinHero />

      </div>
  </div>
  );
}

