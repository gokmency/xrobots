import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';

// Configure supported chains
export const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

// Configure wallet connectors
const connectors = [
  new MetaMaskConnector({ chains }),
  new WalletConnectConnector({
    chains,
    options: {
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    },
  }),
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: 'RWA Platform',
    },
  }),
];

// Create wagmi config
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// Smart contract addresses
export const CONTRACT_ADDRESSES = {
  NFT_MARKETPLACE: process.env.NEXT_PUBLIC_NFT_MARKETPLACE_ADDRESS,
  TOKEN_CONTRACT: process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS,
};

// Chain-specific configurations
export const CHAIN_CONFIG = {
  [mainnet.id]: {
    name: 'Ethereum',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
  },
  [polygon.id]: {
    name: 'Polygon',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
  },
  [optimism.id]: {
    name: 'Optimism',
    symbol: 'ETH',
    explorer: 'https://optimistic.etherscan.io',
  },
  [arbitrum.id]: {
    name: 'Arbitrum',
    symbol: 'ETH',
    explorer: 'https://arbiscan.io',
  },
};
