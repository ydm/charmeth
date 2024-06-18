import React from 'react';
import { useAccount, useDisconnect, useBalance, Connector } from 'wagmi';
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

    console.log("HERE", !!provider);
    provider?.getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045").then(console.log);
    provider?.getBalance("0x2d0764bbe17c0EdB77D14061D5B73a550AC45CbA").then(console.log);

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
            <button onClick={() => connect({
                chainId, connector: connectors[0],
            })}>
                Connect with your {connectors[0].name} Wallet
            </button>
            {connectors.map((connector: Connector) => (
                <button key={connector.id} onClick={() => connect({
                    chainId,
                    connector,
                })}>
                    Connect with {connector.name} {connector.uid}
                </button>
            ))}
        </div>
    );
};

export default Simple;
