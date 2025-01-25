import '../styles/globals.css';
import Layout from '../components/Layout';
import { WagmiConfig } from 'wagmi';
import { config } from '../config/wagmi';

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
}

export default MyApp;
