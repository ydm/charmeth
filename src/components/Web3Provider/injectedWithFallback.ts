import INJECTED_LIGHT_ICON from '/vite.svg';
import METAMASK_ICON from '/vite.svg';
import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

export function injectedWithFallback() {
  return createConnector((config) => {
    const injectedConnector = injected()(config);

    return {
      ...injectedConnector,
      connect(...params) {
        if (!window.ethereum) {
          window.open('https://metamask.io/', 'inst_metamask');
        }
        return injectedConnector.connect(...params);
      },
      get icon() {
        return !window.ethereum || window.ethereum?.isMetaMask ? METAMASK_ICON : INJECTED_LIGHT_ICON;
      },
      get name() {
        return !window.ethereum ? 'Install MetaMask' : window.ethereum?.isMetaMask ? 'MetaMask' : 'Browser Wallet';
      },
      get isFallback(): boolean {
        return (window.ethereum == null);
      }
    };
  });
}
