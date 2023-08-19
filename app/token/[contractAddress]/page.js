'use client';
import React from 'react';
import tokens from '../../tokens.json'; // Adjust the path to your tokens.json file
import { useRouter } from 'next/navigation';

const TokenPage = () => {
  const router = useRouter();
  const { contractAddress } = router.query;

  // Assuming tokens is an object with contract addresses as keys
  const token = tokens[contractAddress];

  if (!token) {
    return <div className="container">Token not found</div>;
  }

  return (
    <div className="container">
      <p>{token.name}</p>
      <p>Symbol: {token.symbol}</p>
      {/* ... rest of the component ... */}
    </div>
  );
};

export default TokenPage;
