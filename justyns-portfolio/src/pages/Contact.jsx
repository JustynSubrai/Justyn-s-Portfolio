import React from "react";
import { Link } from 'react-router-dom';
import '../components/App.css';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { Contact, ContactCon} from '../components/global.styles';
import { TerminalBackground, Nav, AboutNav, Retro, Title } from '../components/about-project.styles'

export default function ContactPage() {
    return (
        <Retro>
            <TerminalBackground className='terminalBackground' src="/images/retro.png" alt="terminal background" />
            <Title>Fill in  contact form below to reach Justyn Subrai.</Title>

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