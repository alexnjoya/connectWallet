"use client"
import Web3Modal from "web3modal"; // Ensure this is the correct import
import Web3 from 'web3'; // Use Web3 instead of ethers
import {CoinbaseWalletSdk} from "@coinbase/wallet-sdk";

const providerOptions = {
  coinbaseWalletSdk: {
    package: CoinbaseWalletSdk,
    options: {
      appName: "my-app",
      infuraId: {3:"https://sepolia.infura.io/v3/3ae7c665923a4007a325c5e1c25f203c"}
    },
  },
};

export default function Home() {

  async function connectWallet() {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3ProviderInstance = await web3Modal.connect();
      const web3Provider = new Web3(web3ProviderInstance); // Use Web3 instance
      console.log(web3Provider)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center my-4">Connect Wallet</h1>
      <button 
        onClick={connectWallet} 
        className="bg-blue-500 text-white font-semibold py-3 px-12 rounded hover:bg-blue-700 transition duration-300 text-lg"
      >
        Click
      </button>
    </div>
  );
}