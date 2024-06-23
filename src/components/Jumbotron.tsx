import React from 'react';
import TakeButton from "./TakeButton";

export default function Jumbotron(): React.ReactElement {
    return (
        <div className="charm-jumbotron charm-background">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-4">It's dangerous to go alone!</p>
                        <p className="pt-3">
                            <TakeButton />
                        </p>
                        <p>
                            <span className="shantell-sans-regular">↑ click me</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
