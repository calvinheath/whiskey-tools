'use client';
import Image from 'next/image'
import "./globals.css"
import Link from 'next/link';
import va from '@vercel/analytics';
import Features from './components/features';
export default function Home() {
  return (
    <div>
    <div className='container'>
      
             {/* Hero Section */}

       <section className="hero">
       <div>
       <h2>Say<span className='emojiHeading'><Image alt="Waving" width="100" height="100" src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png" unoptimized/></span>to analytics<br/> with Whiskey.Tools</h2>
         <p>The ultimate platform for crypto token listing and analytics. <br/>Join the Whiskey.Tools Community and Be a Part of the Innovation<span className='emojiSubheading'><Image width="40" height="40" src="https://em-content.zobj.net/source/microsoft-teams/363/money-mouth-face_1f911.png" unoptimized/></span></p>
         <div className='buttonGroup'>
         <Link href="/presale"><button onClick={() => {va.track('PRESALE');}} className='presalebutton' >WSKY PRESALE</button></Link>
              <a href="https://twitter.com/whiskeytoolsai" target='_blank'><button onClick={() => {va.track('Twitter');}}>Twitter</button></a>
              <a href="https://t.me/whiskeytools"><button onClick={() => {va.track('Telegram');}}>Telegram</button></a>
              <a href="https://discord.gg/dbQ9SFZF5Y"><button onClick={() => {va.track('Discord');}}>Discord</button></a>
        </div>
       </div>
       <Image alt="Whiskey Tools Hero Image" className="heroImage" width="0" height="0" style={{width: "380px",maxWidth: "35%"}}src="https://em-content.zobj.net/source/microsoft-teams/363/robot_1f916.png" unoptimized/>
     </section>

      <Features/>

     
     </div>
     </div>
  )
}
