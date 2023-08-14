// app/functions/refund.js

export const refund = (web3, wskyAmount, walletAddress, CONTRACT_ABI, CONTRACT_ADDRESS) => {
    if (!web3) return;

    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    contractInstance.methods.Refund(wskyAmount).send({ from: walletAddress });
}
