
import "../globals.css";
import "../styles/features.css";
import Image from "next/image";

export default function Features() {

  return (
 
        <section className='featuresContainer'>

            <div className="feature">
            <Image className='featureImage' alt="Wizard" width="0" height="0" src="https://em-content.zobj.net/source/microsoft-teams/363/mage_1f9d9.png" unoptimized/>
                <div className="featureContent">
                    <h1>Codeless Contract Wizard</h1>
                    <p>Simplify the creation of smart contracts with our intuitive wizard. No coding experience required.</p>
                </div>
            </div>

            <div className="feature">
            <Image className='featureImage' alt="Wizard" width="0" height="0" src="https://em-content.zobj.net/source/microsoft-teams/363/robot_1f916.png" unoptimized/>
                <div className="featureContent">
                    <h1>WhiskeyGPT</h1>
                    <p>Engage with our innovative Web3-based AI chatbot. WhiskeyGPT brings intelligent conversation to the decentralized world.</p>
                </div>
            </div>

            <div className="feature">
            <Image className='featureImage' alt="Wizard" width="0" height="0" src="https://em-content.zobj.net/source/microsoft-teams/363/x-ray_1fa7b.png" unoptimized/>
                <div className="featureContent">
                    <h1>Contract Scanner/Auditor</h1>
                    <p>Ensure the security and integrity of your smart contracts. Our AI-powered scanner detects vulnerabilities, performs honeypot tests, and provides a comprehensive bubble map of potential risks.</p>
                </div>
            </div>


         </section>
  );
}

