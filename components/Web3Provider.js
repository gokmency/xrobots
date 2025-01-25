import { WagmiConfig } from 'wagmi';
import { Web3Modal } from '@web3modal/react';
import { EthereumClient } from '@web3modal/ethereum';
import { wagmiConfig, chains } from '../config/web3Config';

// Create ethereumClient
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const Web3Provider = ({ children }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        {children}
      </WagmiConfig>
      
      <Web3Modal
        projectId={process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
        themeVariables={{
          '--w3m-font-family': 'Satoshi, sans-serif',
          '--w3m-accent-color': '#7000FF',
          '--w3m-background-color': '#13131A',
          '--w3m-overlay-background-color': 'rgba(19, 19, 26, 0.8)',
          '--w3m-container-border-radius': '1rem',
          '--w3m-button-border-radius': '0.75rem',
          '--w3m-text-big-bold-size': '1.25rem',
          '--w3m-text-medium-regular-size': '1rem',
          '--w3m-text-small-regular-size': '0.875rem',
          '--w3m-button-hover-highlight-border-radius': '0.75rem',
        }}
      />
    </>
  );
};

export default Web3Provider;
