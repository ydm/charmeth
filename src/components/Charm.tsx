import React from 'react';

export default function Charm({ children }: { children: React.ReactElement; }): React.ReactElement {
    return <>
        <span style={{ color: "#6ea8fe" }}>(</span>
        <span style={{ color: "" }}>
            CHARM
            {children}
        </span>
        <span style={{ color: "#6ea8fe" }}>)</span>
    </>;
}
