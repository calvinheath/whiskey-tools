import "./globals.css";
import Image from "next/image";
export const metadata = {
    title: "Whiskey.Tools - Web3's Most Advanced Multi-Tool",
    description: 'Say 👋 to Whiskey.Tools, where we pair Artificial Intelligence with the new blockchain technologies.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Whiskey.Tools - Web3's Most Advanced Multi-Tool" />
                <meta name="twitter:image" content="https://i.ibb.co/1bWtV0g/Frame-1w.png" />
                <meta name="twitter:site" content="@whiskeytoolsai" />
                <meta name="twitter:creator" content="@calvinheathak" />

                {/* Open Graph Meta Tags */}
                <meta property="og:url" content="https://whiskey.tools" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://i.ibb.co/1bWtV0g/Frame-1w.png" />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />

            </head>
            <body>{children}
            <div className="container">
            <footer className="footer">
            <p>Made with <span className='footerEmoji'><Image alt="Love" width="0" height="0" src="https://em-content.zobj.net/source/microsoft-teams/363/red-heart_2764-fe0f.png" unoptimized/></span>by Calvin Heath</p>
            </footer>

            </div>
            </body>
            
        </html>
    );
}
