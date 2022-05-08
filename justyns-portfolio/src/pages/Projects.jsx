import React from "react";
import '../components/App.css';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { Contact, ContactCon} from '../components/global.styles';
import { TerminalBackground, Nav, AboutNav, Retro, Title, Ul, Linfo, ProjectLink } from '../components/about-project.styles'

export default function Projects() {
    return (
        <Retro>
            <TerminalBackground className='terminalBackground' src="/images/retro.png" alt="terminal background" />
            <Title>Gathering documents for specimen 0: Justyn Subrai.</Title>

            <Ul>
                <Linfo><ProjectLink href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75} /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75} /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75} /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><img src="/images/work-placeholder.png" alt="placeholder" height={75} /></ProjectLink></Linfo><br />

            </Ul>

            <Nav>
                <AboutNav to="/">Home</AboutNav>
                <AboutNav to="/about">About</AboutNav>
                <AboutNav to="/projects">Projects</AboutNav>
            </Nav>

            <Contact >
                <ContactCon>
                    <a href="https://github.com/JustynSubrai"><FaGithub size={30} /></a>
                    <Link to='/contact'><AiOutlineMail size={30} /></Link>
                    <a href="https://www.linkedin.com/in/justyn-subrai-856584224/"><AiFillLinkedin size={30} /></a>
                    <a><IoIosPaper size={30} /></a>
                </ContactCon>
            </Contact>

        </Retro>
    )
}