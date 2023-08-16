import WSKYAbi from "../WSKYAbi.json"
import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useDisconnect, useContractWrite } from "wagmi";

const CONTRACT_ADDRESS = "0xd6f2dfe0e7204c4265e4f414f3855330f53b5e65";
const CONTRACT_ABI = WSKYAbi;

export default function ConnectWallet() {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const label = isConnected ? "Disconnect" : "Connect Wallet";

  const { send: sendBuyTokens } = useContractWrite({
    contractAddress: CONTRACT_ADDRESS,
    contractAbi: CONTRACT_ABI,
    functionName: "buyTokens",
  });

  

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }

  return (
    <div>
      <button onClick={onClick} disabled={loading}>
        {loading ? "Loading..." : label}
      </button>
      <button onClick={() => sendBuyTokens(amount)}>Buy Tokens</button>
    </div>
  );
}
