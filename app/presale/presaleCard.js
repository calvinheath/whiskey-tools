import React, { useState, useEffect } from "react";
import { Web3Button, Web3Modal, useWeb3Modal  } from "@web3modal/react";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, useDisconnect, WagmiConfig, useAccount, usePrepareContractWrite, useContractRead, useContractWrite } from "wagmi";
import { bsc } from "wagmi/chains";
import WSKYABI from "../WSKYAbi.json";
import CountdownTimer from "./countdownTimer"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseEther } from 'viem';
const chains = [ bsc ];
const projectId = "f82c4364b5a9adf93d73dbef5950e0a2";
const CONTRACT_ABI = WSKYABI;   

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});



function UserTokenBalance() {
    
    const { address, isConnecting } = useAccount();
    const contractAddress = '0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65';
    const { data: userTokenBalances, loading, error } = useContractRead({
        address: contractAddress,
        abi: WSKYABI,
        functionName: 'userTokenBalances',
        args: [address]
    });

    // State variable to determine if component has mounted
    const [hasMounted, setHasMounted] = useState(false);

    // On mount, set the hasMounted state to true
    useEffect(() => {
        setHasMounted(true);
    }, []);

    // If the component hasn't mounted, always render "Loading..."
    if (!hasMounted) {
        return <p>Loading...</p>;
    }

    // If there's no address or it's still connecting
    if (!address || isConnecting) {
        return <p>Connect Your Wallet<br/>to Claim or Refund</p>;
    }

    // If there's an error
    if (error) {
        return <p>Error fetching balance: {error.message}</p>;
    }

    // The actual content
    const displayedBalance = userTokenBalances ? (parseFloat(userTokenBalances) / 10**18).toString() : '0';
    return (
        <div>
            <p>WSKY to Claim: {displayedBalance}</p>
        </div>
    );
}

function TotalRaised() {
    const contractAddress = '0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65';
    const [BnbPriceinUsd, setBnbPriceinUsd] = useState('215')
    const PRESALE_CAP_BNB = 200;
    const PRESALE_CAP_USD = PRESALE_CAP_BNB * BnbPriceinUsd;
    
    const fetchUserData = () => {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")
          .then(response => {
            return response.json()
          })
          .then(data => {
            // Extract BNB price from the returned data
            const bnbPrice = data.binancecoin.usd;
            setBnbPriceinUsd(bnbPrice);
            console.log(bnbPrice)
          })
    }

    useEffect(() => {
        fetchUserData(); // Fetch data immediately when component is mounted
        const interval = setInterval(fetchUserData, 10 * 1000); // Set up an interval to fetch data every 10 seconds

        return () => clearInterval(interval); // Clean up the interval when component is unmounted
    }, []); // Empty dependency array ensures this effect runs only once when component is mounted

    const [content, setContent] = useState(<p>Loading total raised...</p>); // Initial state

    const { data: totalRaised, loading, error } = useContractRead({
        address: contractAddress,
        abi: WSKYABI,
        functionName: 'totalRaised',
    });

    useEffect(() => {
        if (loading) {
            setContent(<p>Loading total raised...</p>);
        } else if (error) {
            setContent(<p>Error fetching total raised: {error.message}</p>);
        } else {
            const totalRaisedBNB = parseFloat(totalRaised) / (10**18);
            const totalRaisedUSD = (totalRaisedBNB * BnbPriceinUsd);
            const progressPercentage = ((totalRaisedUSD / PRESALE_CAP_USD) * 100) + 15;
            console.log(progressPercentage)
            setContent(
                <div>
                    <p>Total Raised: {totalRaisedBNB} BNB</p>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                        <span>${totalRaisedUSD.toFixed(2)} / {PRESALE_CAP_USD.toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
                    </div>
                </div>
            );
        }
    }, [loading, error, totalRaised, BnbPriceinUsd]); // Added BnbPriceinUsd to the dependency array

    return content;
}

function BuyTokens() {
    const [amount, setAmount] = useState('');
    const WSKY_PRICE_PER_TOKEN = 0.00008;
    const MIN_WSKY_AMOUNT = 125;
    const MAX_WSKY_AMOUNT = 50000;
    const MIN_BNB_PURCHASE = MIN_WSKY_AMOUNT * WSKY_PRICE_PER_TOKEN;
    const [bnbValue, setBnbValue] = useState(amount * WSKY_PRICE_PER_TOKEN);
    const { config } = usePrepareContractWrite({
        address: '0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65',
        abi: WSKYABI,
        functionName: 'buyTokens',
        value: parseEther(bnbValue.toString()) 
    });



    const handleWskyChange = (e) => {
        const wskyAmount = e.target.value;
        setAmount(wskyAmount);
        setBnbValue(wskyAmount * WSKY_PRICE_PER_TOKEN);
    };

    const { write } = useContractWrite(config);

    
    const handlePurchase = async (e) => {
        e.preventDefault();

        const bnbValueInSmallestUnit = bnbValue * (10 ** 18);
        if (bnbValueInSmallestUnit >= MIN_BNB_PURCHASE * (10 ** 18)) {
            if (write) {
                try {
                    // Step 1: Send the transaction.
                    const transactionReceipt = await write({ value: bnbValueInSmallestUnit.toString() });
                    
                    if (transactionReceipt && transactionReceipt.wait) {
                        // Step 2: Wait for the transaction to be confirmed.
                        const confirmationReceipt = await transactionReceipt.wait();
                        
                        if (confirmationReceipt.status === 1) {
                            toast.success("Purchase successful!");
                        } else {
                            toast.error("Transaction failed after being mined.");
                        }
                    }
                } catch (err) {
                    // Check for user-rejected transaction
                    if (err.code === 4001) {
                        toast.error("Transaction rejected by user.");
                    } 
                    // Check for insufficient funds error
                    else if (err.code === -32603 && err.message.indexOf("insufficient funds") !== -1) {
                        toast.error("Insufficient funds, including for gas fees.");
                    } 
                    // Other errors
                    else {
                        toast.error(`Transaction failed: ${err.message}`);
                    }
                }
            } else {
                toast.error("Connect Your Wallet or Check BNB Balance");
            }
        } else {
            toast.warn(`Amount below minimum purchase limit of ${MIN_BNB_PURCHASE} BNB`);
        }
    };
    
    
    
   

    return (
        <div>
            <form onSubmit={handlePurchase}>
              
                <input
                    type="number"
                    id="wskyAmount"
                    name="WSKY Amount"
                    value={amount}
                    onChange={handleWskyChange}
                    min={MIN_WSKY_AMOUNT}
                    max={MAX_WSKY_AMOUNT}
                    placeholder="WSKY"
                    aria-valuemin={MIN_WSKY_AMOUNT}
                    aria-valuemax={MAX_WSKY_AMOUNT}
                />
                <p>BNB: {bnbValue.toFixed(4)}<br /><span>(+ 0.0005 gas)</span></p>
                <button type="submit">Buy Tokens</button>
            </form>
        </div>
    );
}


const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function PresaleCard() {
  const [amount, setAmount] = useState("1000");
  const contractAddress = "0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65";





  return (
            <WagmiConfig config={wagmiConfig}>
      <div className="presaleCardContainer">
        <div className="presaleCard">
          <TotalRaised/>
        <CountdownTimer/>
         <BuyTokens/>
          <Web3Button/>
          <UserTokenBalance/>
        </div>
      </div>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode="dark"
       themeVariables={{
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent-color': 'rgba(242.00000077486038, 0, 52.000000700354576, 1)',
    '--w3m-background-image': 'linear-gradient(0deg, rgba(242.00000077486038, 0, 52.000000700354576, 1) 0%,rgba(255, 184.95296269655228, 134.2292109131813, 0.5) 100%)',
    '--w3m-container-border-radius': '30px',
    '--w3m-background-border-radius': '20px',
    '--w3m-button-border-radius': '15px',
  }}/>
  <ToastContainer />
      </WagmiConfig>
    
  );
}
