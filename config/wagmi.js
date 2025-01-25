import { createConfig, configureChains } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [
    alchemyProvider({ apiKey: alchemyId }),
    publicProvider(),
  ],
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'RWA Platform',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: walletConnectProjectId,
      },
    }),
  ],
});
