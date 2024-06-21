import React from 'react';
import Charm from "./Charm";

export default function Jumbotron(): React.ReactElement {
    return (
        <div className="charm-jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-4">It's dangerous to go alone!</p>
                        <p className="pt-3">
                            <button className="bg-transparent p-4 text-decoration-none text-white charm-jumbotron-take">
                                <span className="display-2">
                                    Take a lucky <br />
                                    <Charm />
                                </span>
                            </button>
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
