import { QueryClient } from "@tanstack/react-query";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";
import { createClient } from "viem";
import { Connector, CreateConnectorFn, createConfig, http } from "wagmi";

import * as chains from "../../constants/chains";
import { PARAMS } from "./walletConnect";
import { injectedWithFallback } from "./injectedWithFallback";

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig
  }
}

const inj = injectedWithFallback();
console.log("inj:", inj);
inj.name

function makeConfig() {
    const connectors: CreateConnectorFn[] = [];
    const pool: CreateConnectorFn[] = [
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
    pool.map((connector: CreateConnectorFn) => {
        // TODO
        if (true || !connectors.some(x => x.name == connector.name)) {
            console.log("PUSHING", connector.name, connector);
            connectors.push(connector);
        }
    });

    return createConfig({
        chains: [chains.MAINNET, chains.HOLESKY],
        connectors,
        client({ chain }) {
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

