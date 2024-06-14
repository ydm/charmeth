import React from 'react';
import { mainnet } from "viem/chains";
import { useAccount, useDisconnect, useBalance, Connector, useChainId } from 'wagmi';
import { useConnect } from "../hooks/useConnect";
import { useEthersProvider } from '../hooks/useEthersProvider';
import { Web3Provider } from '@ethersproject/providers';
// import

const Simple: React.FC = (_props: {}): React.ReactNode => {
    const { address, isConnected, chainId } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: balance } = useBalance({ address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" });
    const provider: Web3Provider | undefined = useEthersProvider({ chainId });

    provider?.getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045").then(console.log);

    if (isConnected) {
        return (
            <div>
                <div>Connected to {address}</div>
                <div>Balance: {"" + (balance?.value ?? 0)} ETH</div>
                <div>Chain ID: {chainId}, {chainId}</div>
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
        );
    }

    return (
        <div>
            {connectors.map((connector: Connector) => (
                <button key={connector.id} onClick={() => connect({
                    chainId: mainnet.id, connector
                })}>
                    Connect with {connector.name} {connector.uid}
                </button>
            ))}
        </div>
    );
};

export default Simple;
