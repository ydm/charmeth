import React from 'react';

import editor from "../assets/editor.png";
import lawsuit from "../assets/lawsuit.jpg";
import Charm from "./Charm";

import { useAccount, useDisconnect, useBalance, Connector } from 'wagmi';
import { useConnect } from "../hooks/useConnect";

import metamaskImage from "../assets/metamask.png";
import coinbaseImage from "../assets/coinbase.png";
import walletConnectImage from "../assets/wallet-connect.png";
import disconnectImage from "../assets/disconnect.png";
import { getChainName } from "../constants/chains";

export default function Main(): React.ReactElement {
    const { address, isConnected, chainId } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const [_, metamaskCon, coinbaseCon, walletConnectCon] = connectors;

    const label: string = ("" + address).substring(0, 10) + "…@" + getChainName(chainId ?? 0);

    const stepOneCheck: JSX.Element = isConnected ? (<>✓</>) : (<>&nbsp;</>);
    const stepOne = isConnected
        ? (
            <button type="button" className="btn btn-outline-danger" onClick={() => disconnect()}>
                <img src={disconnectImage} style={{ height: "1.5em" }} />
                &nbsp;&nbsp;&nbsp;
                <b>Disconnect</b> <span>{label}</span>
            </button>
        )
        : (
            <>
                <button
                    type="button"
                    className="btn btn-outline-secondary text-white me-2"
                    onClick={() => connect({ chainId, connector: metamaskCon })}
                >
                    <img src={metamaskImage} style={{ height: "1.5em" }} />
                    &nbsp;&nbsp;&nbsp;
                    <b>MetaMask</b>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary text-white me-2"
                    onClick={() => connect({ chainId, connector: coinbaseCon })}
                >
                    <img src={coinbaseImage} style={{ height: "1.5em" }} />
                    &nbsp;&nbsp;&nbsp;
                    <b>Coinbase</b>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary text-white"
                    onClick={() => connect({ chainId, connector: walletConnectCon })}
                >
                    <img src={walletConnectImage} style={{ height: "1.5em" }} />
                    &nbsp;&nbsp;&nbsp;
                    <b>WalletConnect</b>
                </button>
            </>
        );

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <h2 className="">
                        <img className="rounded-1" style={{ verticalAlign: "middle", height: "1.31258em" }} src={lawsuit} />
                        <small>&nbsp;:</small>
                        &nbsp;
                        So… what exactly is <Charm />?
                    </h2>
                    <p className="pt-4 fs-5">
                        <Charm /> is an ERC-20 token written in <b>Mist</b>, a Lisp-like
                        language designed for Ethereum smart contracts, similar to Solidity.
                    </p>
                    <p className="pt-2 fs-5">
                        <Charm /> embodies the belief that well-crafted code brings good karma and luck.
                        While it holds no financial value, it carries the charm of Lisp — being elegant and simple.
                    </p>
                    <p className="pt-2 fs-5">
                        Since luck doesn't cost any money, <Charm /> can be obtained for free.
                    </p>
                    <p className="pt-2 fs-5">
                        Learn more about <b>Mist</b>
                        &nbsp;
                        <a href="https://github.com/ydm/mist">here</a>,

                        or read the full source code of <Charm />
                        &nbsp;
                        <a href="https://github.com/ydm/mist/blob/master/examples/charm.mist">here</a>.
                    </p>
                    <p className="pt-2 fs-5 pb-sm-4 pb-lg-0">
                        <Charm /> is deployed on <a href="#">Mainnet</a> and <a href="#">Holesky</a>.
                    </p>
                </div>
                <div className="col-lg">
                    <img className="img-fluid rounded-4" src={editor} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <hr />
                    <br />
                </div>
            </div>

            <div className="row">
                <div className="col-lg text-center">
                    <button className="bg-transparent p-4 text-decoration-none text-white charm-jumbotron-take">
                        <span className="display-2">
                            Take a lucky <br />
                            <Charm />
                        </span>
                    </button>
                </div>
                <div className="col-lg">
                    <h2 className="">
                        <img className="rounded-1" style={{ verticalAlign: "middle", height: "1.31258em" }} src={lawsuit} />
                        <small>&nbsp;:</small>
                        &nbsp;
                        But how to get one?
                    </h2>
                    <p className="pt-4 fs-5">
                        <span className="font-monospace">{stepOneCheck}</span> 1. Connect your wallet
                    </p>
                    <p>
                        <span className="font-monospace">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        {stepOne}
                    </p>
                    <br />
                    <p className="pt-2 fs-5">
                        <span className="font-monospace">&nbsp;</span> 2. Click the "Take a lucky <Charm />" button
                    </p>
                </div>
            </div>
        </div>
    );
}
