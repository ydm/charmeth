import { QueryClient } from "@tanstack/react-query";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";
import { createClient } from "viem";
import { createConfig, http } from "wagmi";

import * as chains from "../../constants/chains";
import { PARAMS } from "./walletConnect";
// import { injectedWithFallback } from "./injectedWithFallback";

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig
  }
}

export const wagmiConfig = createConfig({
    chains: [chains.MAINNET, chains.HOLESKY],
    connectors: [
        // injectedWithFallback(),
        metaMask({
            preferDesktop: true,
        }),
        coinbaseWallet({
            appName: 'CharmETH',
            reloadOnDisconnect: false,
        }),
        walletConnect(PARAMS),
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

