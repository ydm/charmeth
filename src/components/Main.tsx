import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';

import { getChainName } from "../constants/chains";
import { useConnect } from "../hooks/useConnect";

import Charm from "./Charm";

import metamaskImage from "../assets/metamask.png";
import coinbaseImage from "../assets/coinbase.png";
import walletConnectImage from "../assets/wallet-connect.png";
import disconnectImage from "../assets/disconnect.png";
import editor from "../assets/editor.jpg";
import gnu from "../assets/gnu.jpg";
import lawsuit from "../assets/lawsuit.jpg";

export default function Main(): React.ReactElement {
    const { address, isConnected, chainId } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const [_, metamaskCon, coinbaseCon, walletConnectCon] = connectors;

    const label: string = ("" + address).substring(0, 10) + "…@" + getChainName(chainId ?? 0);

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
                    <h2 className="text-center text-lg-start">
                        <img className="rounded-1" style={{ verticalAlign: "middle", height: "1.31258em" }} src={lawsuit} />
                        <small>&nbsp;:</small>
                        &nbsp;
                        So… what exactly is <Charm />?
                    </h2>
                    <p className="pt-4 fs-5">
                        <Charm /> is an ERC-20 token written in <b>Mist</b>, a Lisp-like
                        language designed for Ethereum smart contracts, just like Solidity.
                    </p>
                    <p className="pt-2 fs-5">
                        <Charm /> embodies the belief that well-crafted code brings good karma and luck.
                        While it holds no financial value, it carries the charm of Lisp — being elegant and simple.
                    </p>
                    <p className="pt-2 fs-5">
                        Since luck doesn't cost any money, <Charm /> can be obtained for free.
                    </p>
                    <p className="pt-2 fs-5">
                        Learn more about <b>Mist</b> <a className="text-warning" href="https://github.com/ydm/mist">here</a>, or check out the full source code of the token <a className="text-warning" href="https://github.com/ydm/mist/blob/master/examples/charm.mist">here</a>.
                    </p>
                    <p className="pt-2 fs-5 pb-4 pb-lg-0">
                        <Charm /> is deployed on <a className="text-warning" href="https://etherscan.io/token/0x2dC39D09C1A3850d3a3c9907b51AEe7217771Fb7">Mainnet</a> and <a className="text-warning" href="https://holesky.etherscan.io/address/0x79772dbc1adbee7c5488229d8021e9e2304ce8af">Holesky</a>.
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
                <div className="col-lg pt-2 fs-5 pb-4 pb-lg-0">
                    <img className="img-fluid rounded-4" src={gnu} />
                </div>
                <div className="col-lg">
                    <h2 className="text-center text-lg-start pb-2">
                        <img className="rounded-1" style={{ verticalAlign: "middle", height: "1.31258em" }} src={lawsuit} />
                        <small>&nbsp;:</small>
                        &nbsp;
                        But how to get one?
                    </h2>
                    <p className="pt-4 fs-5 text-center text-lg-start">
                        1. Connect your wallet
                    </p>
                    <p className="text-sm-center text-center text-lg-start">
                        {stepOne}
                    </p>
                    <br />
                    <p className="pt-2 fs-5 text-center text-lg-start">
                        2. Click on the big button above
                    </p>
                </div>
            </div>
        </div>
    );
}
