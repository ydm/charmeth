import React from 'react';

export default function Main(): React.ReactElement {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-secondary text-center mt-4 small">
                            © 2024 Copyright: <a className="text-secondary" href="https://github.com/ydm">ydm@github</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="text-white-50 text-center mb-4 small">
                            <a className="text-secondary" href="https://github.com/ydm/mist">Mist</a> 
                            &nbsp;·&nbsp;
                            <a className="text-secondary" href="https://github.com/ydm/mist/blob/master/examples/charm.mist">Charm</a>
                            &nbsp;·&nbsp;
                            <a className="text-secondary" href="https://github.com/ydm/charmeth/">Source code of this website</a>
                            &nbsp;·&nbsp;
                            <a className="text-secondary" href="https://etherscan.io/token/0x2dC39D09C1A3850d3a3c9907b51AEe7217771Fb7">Mainnet deployment</a>
                            &nbsp;·&nbsp;
                            <a className="text-secondary" href="https://holesky.etherscan.io/token/0x79772dbc1adbee7c5488229d8021e9e2304ce8af">Holesky deployment</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}