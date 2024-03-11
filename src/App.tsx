import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalProvider } from './AppContext';
import { AuthProvider } from './AuthContext';
import { Layout } from './components/Layout';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { WagmiConfig } from 'wagmi';
import { goerli, mainnet } from 'wagmi/chains';

// 1. Get projectId
const projectId = 'f8c5ca5cec793168657b6d9c2dddaaed';

// 2. Create wagmiConfig
const metadata = {
  name: 'project-x',
  description: 'project-x',
  url: 'http://localhost:3000',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, goerli];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  return (
    <Router>
      <WagmiConfig config={wagmiConfig}>
        <GlobalProvider>
          <AuthProvider>
            <Layout />
          </AuthProvider>
        </GlobalProvider>
      </WagmiConfig>
    </Router>
  );
}

export default App;
