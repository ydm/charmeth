import { QueryClient } from '@tanstack/react-query';
// import { ChainId } from '@uniswap/sdk-core'

import * as chains from '../../constants/chains';
import UNISWAP_LOGO from '/vite.svg';
import { createClient } from 'viem';
import { createConfig, http } from 'wagmi';
import { connect } from 'wagmi/actions';
import { coinbaseWallet, injected, safe } from 'wagmi/connectors';
import { injectedWithFallback } from './injectedWithFallback';

// declare module 'wagmi' {
//   interface Register {
//     config: typeof wagmiConfig
//   }
// }

export const wagmiConfig = createConfig({
  chains: [chains.MAINNET, chains.HOLESKY],
  connectors: [
    injectedWithFallback(),
    coinbaseWallet({
      appName: 'Uniswap',
      appLogoUrl: UNISWAP_LOGO,
      reloadOnDisconnect: false,
    }),
    safe(),
  ],
  client({ chain }) {
    return createClient({
      chain,
      batch: { multicall: true },
      pollingInterval: 12_000,
      transport: http(chain.rpcUrls.appOnly.http[0]),
    });
  },
});

export const queryClient = new QueryClient();

// Automatically connect if running in Cypress environment
if ((window as any).Cypress?.eagerlyConnect) {
  connect(wagmiConfig, { connector: injected() });
}
