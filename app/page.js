import Image from 'next/image'
import HeroImg from "../public/homepage.png"
import CoinHero from './components/coinhero';
import Sidebar from './components/sidebar';
import "./globals.css"
import Link from 'next/link';
import handWaving from "../public/icons/handWaving.png"
export default function Home() {
  return (
    <div>
    <Sidebar />
    <div className='container'>
      
             {/* Hero Section */}

       <section className="hero">
       <div>
       <h2>Say<span className='emojiHeading'><Image width="100" height="100" src={handWaving} /></span>to complicated tasks with Whiskey.Tools</h2>
         <p>The ultimate platform for listing and voting on crypto tokens. <br/> Our Presale is Live, get some $WSKY before it ends</p>
         <Link href="/presale"><button>Buy WSKY</button></Link>
       </div>
       <Image className="heroImage" src={HeroImg} />
     </section>

     <CoinHero />

     <footer className="footer">
            <p>&copy; 2023 Whiskey.Tools AI - All rights reserved.</p>
        </footer>
     </div>
     </div>
  )
}
