import React from 'react';

import editor from "../assets/editor.png";
import lawsuit from "../assets/lawsuit.jpg";
import Charm from "./Charm";

export default function Main(): React.ReactElement {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <h2 className="">
                        <img className="rounded-1" style={{ verticalAlign: "middle", height: "1.31258em" }} src={lawsuit} />
                        <small>&nbsp;:</small>
                        &nbsp;
                        So... what exactly is <Charm />?
                    </h2>
                    <p className="pt-4 fs-4">
                        <Charm /> is an ERC-20 token written in <b>Mist</b>, a Lisp-like
                        language designed for Ethereum smart contracts.
                    </p>
                    <p className="pt-4 fs-4">
                        The purpose of <Charm /> is to bring luck. And while it holds no
                        financial value, it carries the charm of being written in Lisp —
                        renowned for its elegance and simplicity.
                    </p>
                    <p className="pt-4 fs-4">
                        <Charm /> embodies the belief that good luck follows well-crafted code.
                        Since neither code nor luck costs any money, it can be minted for free.
                    </p>
                    <p className="pt-4 fs-4 pb-sm-4 pb-lg-0">
                        To learn more about the <b>Mist</b> language, click
                        &nbsp;
                        <a href="https://github.com/ydm/mist">here</a>,
                        or read the full source code of <Charm />
                        &nbsp;
                        <a href="https://github.com/ydm/mist/blob/master/examples/charm.mist">here</a>.
                    </p>
                </div>
                <div className="col-lg">
                    <img className="img-fluid rounded-4" src={editor} />
                </div>
            </div>
        </div>
    );
}
