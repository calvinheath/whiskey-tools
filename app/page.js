import Image from 'next/image'
import HeroImg from "../public/homepage.png"
import CoinHero from './components/coinhero';
import Sidebar from './components/sidebar';
import "./globals.css"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <Sidebar />
    <div className='container'>
      
             {/* Hero Section */}

       <section className="hero">
       <div>
         <h2>Welcome to Whiskey.Sniper</h2>
         <p>The ultimate platform for listing and voting on crypto tokens. <br/> Our Presale is Live, get some $WSKY before it ends</p>
         <Link href="/presale"><button>Buy WSKY</button></Link>
       </div>
       <Image className="heroImage" src={HeroImg} />
     </section>

     <CoinHero />

     <footer className="footer">
            <p>&copy; 2023 Whiskey.Tools. All rights reserved.</p>
        </footer>
     </div>
     </div>
  )
}
