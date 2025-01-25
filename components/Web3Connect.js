import { useState, useEffect } from 'react';
import { useConnect, useAccount, useNetwork, useBalance } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';

const Web3Connect = () => {
  const [mounted, setMounted] = useState(false);
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: balance } = useBalance({
    address: address,
    enabled: mounted && !!address,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="btn-wallet loading" disabled>
        Loading...
      </button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="wallet-info glass-effect">
        <div className="wallet-address">
          <span className="text-gradient">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        </div>
        {balance && (
          <div className="wallet-balance">
            {parseFloat(balance?.formatted).toFixed(4)} {balance?.symbol}
          </div>
        )}
        <div className="network-badge">
          {chain?.name || 'Unknown Network'}
        </div>
      </div>
    );
  }

  return (
    <div className="connect-wallet-container">
      {connectors.map((connector) => {
        const ready = mounted && connector.ready;
        return (
          <button
            key={connector.id}
            className={`btn-wallet ${connector.id}`}
            onClick={() => connect({ connector })}
            disabled={!ready || isLoading}
          >
            {isLoading && connector.id === pendingConnector?.id ? (
              'Connecting...'
            ) : (
              connector.name
            )}
          </button>
        );
      })}
      {error && (
        <div className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Web3Connect;
