import "./projects.scss"
import React, { useState } from "react";
//a
export default function Projects() {

    const [selected, setSelected] = useState("featured")

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="container">
                <div className="item">
                    <a href="https://jacob-markman-tic-tac-toe.netlify.app" target="_blank" and rel="noopener noreferrer">
                        <img src="./assets/tictactoe.png" alt="" />
                    </a>
                    <h3>Tic Tac Toe Game</h3>
                </div>
                <div className="item">
                    <h3>E-Commerce Shop (in Progress)
                        <a href="https://commercejs-my-store-project.netlify.app/" target="_blank" and rel="noopener noreferrer">
                            <img src="./assets/commerce-project.png" alt="" />
                        </a>
                    </h3>
                </div>
                <div className="item noitem">
                    <h3>In Progress...</h3>
                </div>
            </div>
        </div>
    )
}
