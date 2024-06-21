import React from 'react';
import { useAccount } from 'wagmi';
import { getChainName, isSupportedChain } from "../constants/chains";
import Charm from "./Charm";

const Navbar: React.FC = (_props: {}): React.ReactNode => {
    const { isConnected, chainId } = useAccount();

    let children: React.ReactElement = <></>;
    if (isConnected) {
        if (isSupportedChain(chainId ?? 0)) {
            children = (
                <>
                    <span>&nbsp;'</span>
                    <span>{getChainName(chainId ?? 0)}</span>
                </>
            );
        } else {
            children = (
                <>
                    <span>&nbsp;'</span>
                    <span className="charm-underline-wavy" title="connect to either mainnet or holesky">{"chain" + chainId}</span>
                </>
            );
        }
    }

    return (
        <header>
            <div className="navbar navbar-dark bg-dark box-shadow fixed-top charm-header-border">
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand balsamiq-sans-regular" href="#">
                        <Charm>
                            {children}
                        </Charm>
                    </a>
                    <a href="https://github.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </a>
                </div>
            </div>
        </header >
    );
};

export default Navbar;
