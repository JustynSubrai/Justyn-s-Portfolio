import React from "react"
import { TerminalBackground, AboutNav, Nav } from '../components/about.styles'

export default function About() {
    return (
        <section>
            <div className="">
                <h2 className="">About Me</h2>
            </div>

            <TerminalBackground className='terminalBackground' src="/images/retro.png" alt="terminal background" />
        <Nav>
            <AboutNav to="/">Home</AboutNav>
            <AboutNav to="/about">About Me</AboutNav>
            <AboutNav to="/projects">Projects</AboutNav>
        </Nav>

        </section>
    )
}