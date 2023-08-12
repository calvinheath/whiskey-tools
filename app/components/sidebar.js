import React from 'react';
import '../styles/sidebar.css';
import Link from 'next/link';  // Import the Link component

const Sidebar = () => {
    return (
            <nav className="sidebarContainer">
            <div className='sidebarlinks'>
                <h2 className="sidebarHeader">Whiskey.Sniper</h2>
                <Link href="/" className="navLink">Home</Link>
                <Link href="/presale" className="navLink">Presale</Link>
                <Link href="/top-tokens" className="navLink" disabled>Top Tokens <span className='emoji'>🪙</span></Link>
                <Link href="/trending" className="navLink" disabled>Trending <span className='emoji'>📈</span></Link>
                <Link href="/promote" className="navLink" disabled>Promote <span className='emoji'>📢</span></Link>
            </div>

            <button disabled>List Your Token</button>

            </nav>
    );
}

export default Sidebar;
