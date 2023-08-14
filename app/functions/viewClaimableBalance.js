// app/functions/viewClaimableBalance.js

export const viewClaimableBalance = async (web3, walletAddress, CONTRACT_ABI, CONTRACT_ADDRESS) => {
    if (!web3) return;

    const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    const balanceInWei = await contractInstance.methods.userTokenBalances(walletAddress).call();
    const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
    return balanceInEther;
}
