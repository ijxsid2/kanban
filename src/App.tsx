import * as React from 'react'
import './App.css'

let Container = () => (
    <div className="App__board">
        <h1 className="App__board-heading">BoardName</h1>
        <section className="App__columns-section">
            <div className="App__column">
                <h3 className="App__column-name">
                    Column 1
                </h3>
                <ul className="App__column-contents">
                    <li className="App__column-item">
                        first task
                    </li>
                </ul>
            </div>
            <h3 className="App__column">Column 2</h3>


        </section>

    </div>
)

export default Container;