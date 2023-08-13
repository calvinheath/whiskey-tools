import React from 'react';
import '../styles/sidebar.css';
import Link from 'next/link';  // Import the Link component
import Image from 'next/image';
import Home from "../../public/icons/Home.png"
import chartRising from "../../public/icons/chartRising.png"


const Sidebar = () => {
    return (
            <nav className="sidebarContainer">
            <div className='sidebarlinks'>
                <h2 className="sidebarHeader">Whiskey.Tools</h2>
                <Link href="/" className="navLink">Home <span className='emojiButton emoji'><Image alt="Home" width="24" height="24" src={Home} unoptimized/></span></Link>
                <Link href="/presale" className="navLink">Presale <span className='emojiButton emoji'><Image alt="Presale" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/spiral-calendar_1f5d3-fe0f.png" unoptimized/></span></Link>
                <Link href="#" className="navLink" disabled>Top Tokens <span className='emojiButton emoji'><Image alt="Top Tokens" width="24" height="24" src={chartRising} unoptimized/></span></Link>
                <Link href="#" className="navLink" disabled>Trending <span className='emojiButton emoji'><Image alt="Trending" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/fire_1f525.png" unoptimized/></span></Link>
                <Link href="#" className="navLink" disabled>Promote <span className='emojiButton emoji'><Image alt="Promote" width="24" height="24" src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png" unoptimized/></span></Link>
            </div>

            <button disabled>List Your Token</button>

            </nav>
    );
}

export default Sidebar;
