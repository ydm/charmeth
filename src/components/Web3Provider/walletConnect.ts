if (import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID === undefined) {
  throw new Error('VITE_WALLET_CONNECT_PROJECT_ID must be a defined environment variable')
}
const WALLET_CONNECT_PROJECT_ID = <string>import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

export const PARAMS = {
    projectId: WALLET_CONNECT_PROJECT_ID,
    metadata: {
        name: 'CharmETH',
        description: 'Get a lucky Charm',
        url: 'https://charmeth.com',
        icons: ['https://charmeth.com/favicon.png'],
    },
    qrModalOptions: {
        themeVariables: {
            "--wcm-font-family": '"Inter custom", sans-serif',
            "--wcm-z-index": "9000",
        },
    },
};
