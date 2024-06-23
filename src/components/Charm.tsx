import React from 'react';

export default function Charm({ children }: { children?: React.ReactElement; }): React.ReactElement {
    return (
        <span className="balsamiq-sans-regular">
            <span style={{ color: "#ffc107" }}>(</span>
            <span style={{ color: "" }}>
                CHARM
                {children}
            </span>
            <span style={{ color: "#ffc107" }}>)</span>
        </span>
    );
}
