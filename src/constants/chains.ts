import {
    mainnet,
    holesky,
} from 'wagmi/chains';

import { Chain } from "viem";

export const MAINNET: Chain<undefined> = mainnet;
export const HOLESKY: Chain<undefined> = holesky;

export const SUPPORTED_CHAINS: Array<Chain<undefined>> = [MAINNET, HOLESKY];

export function isSupportedChain(chainId: number): boolean {
    return SUPPORTED_CHAINS.reduce<boolean>(
        (memo: boolean, x: Chain<undefined>): boolean => memo || x.id === chainId,
        false,
    );
}

export function getChainName(chainId: number): string {
    if (chainId === 1) {
        return "mainnet";
    }
    return SUPPORTED_CHAINS.reduce<string>(
        (memo: string, x: Chain<undefined>): string => (x.id === chainId) ? x.name : memo,
        "",
    ).toLocaleLowerCase();
}