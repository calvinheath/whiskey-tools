// app/functions/fetchTotalRaised.js

export const fetchTotalRaised = async (web3, CONTRACT_ABI, CONTRACT_ADDRESS) => {
    if (!web3) return;

    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    const raisedInWei = await contractInstance.methods.totalRaised().call();
    const raisedInBnb = web3.utils.fromWei(raisedInWei, 'ether');
    return raisedInBnb;
}
