import Image from 'next/image'
import HeroImg from "../public/homepage.png"
import CoinHero from './components/coinhero';
import Sidebar from './components/sidebar';
import "./globals.css"
import Link from 'next/link';
import handWaving from "../public/icons/handWaving.png"
import moneyMouth from "../public/icons/moneyMouth.png"

export default function Home() {
  return (
    <div>
    <Sidebar />
    <div className='container'>
      
             {/* Hero Section */}

       <section className="hero">
       <div>
       <h2>Say<span className='emojiHeading'><Image alt="Waving" width="100" height="100" src={handWaving} unoptimized/></span>to hard tasks <br/> with Whiskey.Tools</h2>
         <p>The ultimate platform for listing and voting on crypto tokens. <br/> Our Presale is Live, get some $WSKY before it ends<span className='emojiSubheading'><Image width="40" height="40" src={moneyMouth} unoptimized/></span></p>
         <div className='buttonGroup'>
         <Link href="/presale"><button>View the Presale</button></Link>
         <a className="button" href="https://twitter.com/whiskeytoolsai" target='_blank'><button>Twitter</button></a>
        <a href="https://t.me/whiskeytools"><button>Telegram</button></a>
        </div>
       </div>
       <Image alt="Whiskey Tools Hero Image" className="heroImage" src={HeroImg} />
     </section>
     <h2 className='sectionHeader'>View Top Tokens</h2>

     <CoinHero />

     <footer className="footer">
            <p>&copy; 2023 Whiskey.Tools AI - All rights reserved.</p>
        </footer>
     </div>
     </div>
  )
}
