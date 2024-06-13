import { ReactNode, FC, PropsWithChildren, createContext, useContext, useEffect } from 'react';
import { UserRejectedRequestError } from 'viem';
import { ResolvedRegister, UseConnectReturnType, useConnect as useConnectWagmi, useDisconnect } from 'wagmi';

const ConnectionContext = createContext<UseConnectReturnType<ResolvedRegister['config']> | undefined>(undefined);

export const ConnectionProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren): ReactNode => {
    const { disconnect } = useDisconnect();

    const connection = useConnectWagmi({
        mutation: {
            onMutate({ connector }) {
                console.debug(`Connection activating: ${connector.name}`);
            },
            onSuccess(_, { connector }) {
                console.debug(`Connection activated: ${connector.name}`);
            },
            onError(error, { connector }) {
                if (error instanceof UserRejectedRequestError) {
                    connection.reset();
                    return;
                }

                console.debug(`Connection failed: ${connector.name}`);
                console.error(error);
            },
        },
    });

    useEffect(() => {
        console.log("useEffect: connection.isPending =", connection.isPending);
        if (connection.isPending) {
            connection.reset();
            disconnect();
        }
    }, [connection, disconnect]);

    return (
        <ConnectionContext.Provider value={connection}>
            {children}
        </ConnectionContext.Provider>
    );
};

/**
 * Wraps wagmi.useConnect in a singleton provider to provide the same connect state to all callers.
 * @see {@link https://wagmi.sh/react/api/hooks/useConnect}
        */
export function useConnect(): UseConnectReturnType {
    const value: UseConnectReturnType | undefined = useContext(ConnectionContext);
    if (value == null) {
        throw new Error('useConnect must be used within a ConnectionProvider');
    }
    return value;
}
