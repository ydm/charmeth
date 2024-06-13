import React from 'react';
import { mainnet } from "viem/chains";
import { useAccount, useConnect, useDisconnect, useBalance, Connector, useChainId } from 'wagmi';
// import

const Simple: React.FC = (_props: {}): React.ReactNode => {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: balance } = useBalance({ address });
    const chainID: number = useChainId();

    if (isConnected) {
        return (
            <div>
                <div>Connected to {address}</div>
                <div>Balance: {"" + (balance?.value ?? 0)} ETH</div>
                <div>Chain ID: {chainID}</div>
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
                    Connect with {connector.name}
                </button>
            ))}
        </div>
    );
};

export default Simple;
