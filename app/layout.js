import "./globals.css";

export const metadata = {
    title: 'Whiskey.Tools AI - $WSKY Presale Live',
    description: 'Say 👋 to complicated tasks with Whiskey.Tools. #1 Web3 Multitool on BSC - Presale Live Now',
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
                <meta name="twitter:description" content="Say 👋 to complicated tasks with Whiskey.Tools, where we pair Artificial Intelligence with the new blockchain technologies." />
                <meta name="twitter:image" content="https://i.ibb.co/7Y52bx7/fwa.png" />
                <meta name="twitter:site" content="@whiskeytoolsai" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:url" content="https://whiskey.tools" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Whiskey.Tools AI - $WSKY Presale Live" />
                <meta property="og:description" content="Say 👋 to complicated tasks with Whiskey.Tools, where we pair Artificial Intelligence with the new blockchain technologies." />
                <meta property="og:image" content="https://i.ibb.co/7Y52bx7/fwa.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
