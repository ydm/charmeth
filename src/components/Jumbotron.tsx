import React from 'react';
import Charm from "./Charm";

export default function Jumbotron(): React.ReactElement {
    return (
        <div className="charm-jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <span className="display-4">It's dangerous to go alone!</span>
                        <br />
                        <br />
                        <br />
                        <button className="bg-transparent p-4 text-decoration-none text-white charm-jumbotron-take">
                            <span className="display-2">
                                Take a lucky <br />
                                <Charm />
                            </span>
                        </button>
                        <br />
                        <br />
                        <span className="shantell-sans-regular">↑ click me</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
