import React from "react";
import {TerminalBackground} from '../components/about.styles'

export default function Projects() {
    return (
        <section>
            <h2 className="pageTitle">My Projects</h2>

            <a href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75}/></a>
            <a href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75}/></a>
            <a href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75}/></a>
            <a href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75}/></a>
            <TerminalBackground className='terminalBackground' src="/images/retro.png" alt="terminal background"/>
        </section>
        )
}