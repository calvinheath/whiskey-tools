import React from 'react';
import '../styles/sidebar.css';
import Link from 'next/link';  // Import the Link component
import Image from 'next/image';
import Rocket from "../../public/icons/Rocket.png"
import Fire from "../../public/icons/Fire.png"
import calendarFlip from "../../public/icons/calendarTear.png"
import Home from "../../public/icons/Home.png"
import chartRising from "../../public/icons/chartRising.png"


const Sidebar = () => {
    return (
            <nav className="sidebarContainer">
            <div className='sidebarlinks'>
                <h2 className="sidebarHeader">Whiskey.Tools</h2>
                <Link href="/" className="navLink">Home <span className='emojiButton emoji'><Image alt="Home" width="24" height="24" src={Home} unoptimized/></span></Link>
                <Link href="/presale" className="navLink">Presale <span className='emojiButton emoji'><Image alt="Presale" width="24" height="24" src={calendarFlip} unoptimized/></span></Link>
                <Link href="#" className="navLink" disabled>Top Tokens <span className='emojiButton emoji'><Image alt="Top Tokens" width="24" height="24" src={chartRising} unoptimized/></span></Link>
                <Link href="#" className="navLink" disabled>Trending <span className='emojiButton emoji'><Image alt="Trending" width="24" height="24" src={Fire} unoptimized/></span></Link>
                <Link href="#" className="navLink" disabled>Promote <span className='emojiButton emoji'><Image alt="Promote" width="24" height="24" src={Rocket} unoptimized/></span></Link>
            </div>

            <button disabled>List Your Token</button>

            </nav>
    );
}

export default Sidebar;
