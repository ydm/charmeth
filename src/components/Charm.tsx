import React from 'react';

export default function Charm({ children }: { children?: React.ReactElement; }): React.ReactElement {
    return (
        <span className="balsamiq-sans-regular">
            <span style={{ color: "#6ea8fe" }}>(</span>
            <span style={{ color: "" }}>
                CHARM
                {children}
            </span>
            <span style={{ color: "#6ea8fe" }}>)</span>
        </span>
    );
}
