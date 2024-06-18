import { QueryClient } from "@tanstack/react-query";
import { coinbaseWallet, walletConnect, metaMask } from "wagmi/connectors";
import { createClient } from "viem";
import { CreateConnectorFn, createConfig, http } from "wagmi";

import { Chain } from "viem";

import * as chains from "../../constants/chains";
import { PARAMS } from "./walletConnect";
import { injectedWithFallback } from "./injectedWithFallback";

declare module 'wagmi' {
    interface Register {
        config: typeof wagmiConfig;
    }
}

function makeConfig() {
    const connectors: CreateConnectorFn[] = [
        injectedWithFallback(),
        metaMask({
            preferDesktop: true,
        }),
        coinbaseWallet({
            appName: 'CharmETH',
            reloadOnDisconnect: false,
        }),
        walletConnect(PARAMS),
    ];

    return createConfig({
        chains: [chains.MAINNET, chains.HOLESKY],
        connectors,
        multiInjectedProviderDiscovery: false,
        client({ chain }: { chain: Chain<undefined>; }) {
            return createClient({
                chain,
                batch: { multicall: true },
                pollingInterval: 12_000,
                transport: http(chain.rpcUrls.appOnly.http[0]),
            });
        },
    });
}

export const wagmiConfig = makeConfig();

export const queryClient = new QueryClient();

