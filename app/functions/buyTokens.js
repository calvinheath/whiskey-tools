// app/functions/buyTokens.js

export const buyTokens = (web3, bnbValue, walletAddress, CONTRACT_ABI, CONTRACT_ADDRESS) => {
    if (!web3 || !bnbValue) return;

    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    contractInstance.methods.buyTokens().send({
        from: walletAddress,
        value: web3.utils.toWei(bnbValue.toString(), 'ether')
    });
}
