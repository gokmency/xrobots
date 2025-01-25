import { ethers } from 'ethers';
import { CONTRACT_ADDRESSES } from '../config/web3Config';

// ABI for NFT Marketplace contract
const MARKETPLACE_ABI = [
  // Add your marketplace contract ABI here
];

// Helper function to format ETH values
export const formatEth = (value) => {
  return ethers.utils.formatEther(value);
};

// Helper function to parse ETH values
export const parseEth = (value) => {
  return ethers.utils.parseEther(value.toString());
};

// Get marketplace contract instance
export const getMarketplaceContract = (signer) => {
  return new ethers.Contract(
    CONTRACT_ADDRESSES.NFT_MARKETPLACE,
    MARKETPLACE_ABI,
    signer
  );
};

// Buy NFT function
export const buyNFT = async (signer, tokenId, price) => {
  try {
    const contract = getMarketplaceContract(signer);
    const tx = await contract.buyNFT(tokenId, {
      value: parseEth(price)
    });
    return await tx.wait();
  } catch (error) {
    console.error('Error buying NFT:', error);
    throw error;
  }
};

// List NFT for sale
export const listNFTForSale = async (signer, tokenId, price) => {
  try {
    const contract = getMarketplaceContract(signer);
    const tx = await contract.listNFT(tokenId, parseEth(price));
    return await tx.wait();
  } catch (error) {
    console.error('Error listing NFT:', error);
    throw error;
  }
};

// Get NFT metadata
export const getNFTMetadata = async (tokenId) => {
  try {
    const contract = getMarketplaceContract(signer);
    const uri = await contract.tokenURI(tokenId);
    const response = await fetch(uri);
    return await response.json();
  } catch (error) {
    console.error('Error fetching NFT metadata:', error);
    throw error;
  }
};

// Get gas price
export const getGasPrice = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const gasPrice = await provider.getGasPrice();
    return formatEth(gasPrice);
  } catch (error) {
    console.error('Error getting gas price:', error);
    throw error;
  }
};

// Check if user owns NFT
export const checkNFTOwnership = async (signer, tokenId) => {
  try {
    const contract = getMarketplaceContract(signer);
    const owner = await contract.ownerOf(tokenId);
    return owner.toLowerCase() === signer.getAddress().toLowerCase();
  } catch (error) {
    console.error('Error checking NFT ownership:', error);
    throw error;
  }
};

// Get all NFTs owned by user
export const getUserNFTs = async (signer) => {
  try {
    const contract = getMarketplaceContract(signer);
    const balance = await contract.balanceOf(await signer.getAddress());
    const nfts = [];
    
    for (let i = 0; i < balance; i++) {
      const tokenId = await contract.tokenOfOwnerByIndex(await signer.getAddress(), i);
      const metadata = await getNFTMetadata(tokenId);
      nfts.push({ tokenId, metadata });
    }
    
    return nfts;
  } catch (error) {
    console.error('Error getting user NFTs:', error);
    throw error;
  }
};

// Get marketplace statistics
export const getMarketplaceStats = async () => {
  try {
    const contract = getMarketplaceContract(signer);
    const totalSupply = await contract.totalSupply();
    const totalListed = await contract.totalListed();
    const floorPrice = await contract.getFloorPrice();
    
    return {
      totalSupply: totalSupply.toString(),
      totalListed: totalListed.toString(),
      floorPrice: formatEth(floorPrice)
    };
  } catch (error) {
    console.error('Error getting marketplace stats:', error);
    throw error;
  }
};
