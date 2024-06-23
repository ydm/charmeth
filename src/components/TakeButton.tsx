import React, { useState, useReducer, Reducer, Dispatch } from 'react';

import * as chains from "../constants/chains";
import Charm from "./Charm";

import { useAccount, useDisconnect, useBalance, Connector } from 'wagmi';
import { useConnect } from "../hooks/useConnect";
import { useEthersProvider } from '../hooks/useEthersProvider';
import { TransactionReceipt, TransactionResponse, Web3Provider } from '@ethersproject/providers';

interface Status {
    status: "not available" | "waiting for signature ..." | "waiting for confirmation ..." | "success" | "rejected";
    hash: string;
}

interface Action {
    action: "InitiateTx" | "WaitTx" | "CompleteTx" | "FailTx";
    hash: string;
}

function getTokenAddress(chainId: number): string {
    switch (chainId) {
        case chains.HOLESKY.id:
            return "0x79772DBc1adbEe7c5488229d8021E9e2304cE8af";
        case chains.MAINNET.id:
            return "0x79772DBc1adbEe7c5488229d8021E9e2304cE8af";
        default:
            return "0xdead";
    }
}

function getEtherscanURL(chainId: number, tx: string) {
    switch (chainId) {
        case chains.HOLESKY.id:
            return `https://holesky.etherscan.io/tx/${tx}`;
        case chains.MAINNET.id:
            return `https://etherscan.io/tx/${tx}`;
        default:
            return "";
    }
}

async function mint(provider: Web3Provider, dispatch: Dispatch<Action>) {
    dispatch({ action: "InitiateTx", hash: "" });
    try {
        const to: string = getTokenAddress(provider.network.chainId);
        const signer = provider.getSigner();
        const response: TransactionResponse = await signer.sendTransaction({
            to,
            data: "0x1249c58b", // mint()
        });
        dispatch({ action: "WaitTx", hash: "" });
        const receipt: TransactionReceipt = await response.wait(1);
        if (("" + receipt.transactionHash).length === 66) {
            dispatch({ action: "CompleteTx", hash: receipt.transactionHash });
        } else {
            dispatch({ action: "FailTx", hash: "" });
        }
    } catch (e) {
        console.error(e);
        dispatch({ action: "FailTx", hash: "" });
    }
}

function reducer(_status: Status, action: Action): Status {
    switch (action.action) {
        case "InitiateTx":
            return {
                status: "waiting for signature ...",
                hash: action.hash,
            };
        case "WaitTx":
            return {
                status: "waiting for confirmation ...",
                hash: action.hash,
            };
        case "CompleteTx":
            return {
                status: "success",
                hash: action.hash,
            };
        case "FailTx":
            return {
                status: "rejected",
                hash: action.hash,
            };
        default:
            return {
                status: "not available",
                hash: "",
            };
    }
}

export default function TakeButton(): React.ReactElement {
    const [status, dispatch] = useReducer(reducer, { status: "not available", hash: "" });
    const { isConnected, chainId } = useAccount();
    const { connect, connectors } = useConnect();
    const provider: Web3Provider | undefined = useEthersProvider({ chainId });

    function action() {
        if (isConnected) {
            if (provider != null && status.status !== "success") {
                mint(provider, dispatch);
            } else {
                console.error("provider is nil");
            }
        } else {
            connect({ chainId, connector: connectors[0] });
        }
    };

    const etherscan = (("" + status.hash).length === 66)
        ? <>, <a className="charm-shadow text-white" href={getEtherscanURL(chainId ?? 0, status.hash)} target="_blank">go to tranasction</a></>
        : <></>;

    const footer = (status.status === "not available")
        ? <><code>&nbsp;</code> <span>&nbsp;</span></>
        : <><code>status:</code> <span>{status.status}</span> {etherscan}</>;

    return (
        <button
            className="bg-transparent p-4 text-decoration-none text-white charm-jumbotron-take"
            onClick={() => action()}
        >
            <span className="display-2">
                Take a lucky <br />
                <Charm />
            </span>

            <br />
            {footer}
        </button>
    );
}