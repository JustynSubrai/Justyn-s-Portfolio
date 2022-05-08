import React from "react";
import '../components/App.css';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { Contact, ContactCon} from '../components/global.styles';
import { TerminalBackground, Nav, AboutNav, Retro, Title, Linfo, ProjectLink, ProjectUl, ProjectImg } from '../components/about-project.styles'

export default function Projects() {
    return (
        <Retro>
            <TerminalBackground className='terminalBackground' src="/images/retro.png" alt="terminal background" />
            <Title>Gathering documents for specimen 0: Justyn Subrai.</Title>

            <ProjectUl>
                <Linfo><ProjectLink href=""><ProjectImg src="/images/teamGenerator.png" alt="img of team profile generator mockup" height={200} width={200} /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><ProjectImg src="/images/swindleShop.png" alt="img of Swindle Shop mockup" /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><ProjectImg src="/images/budgetTracker.png" alt="img of Budget Tracker mockup" /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><ProjectImg src="/images/roadbuddyScreenshot.png" alt="img of RoadBuddy mockup" /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><ProjectImg src="/images/socialApi.png" alt="img of Social Network Api ReadMe" /></ProjectLink></Linfo><br />
                <Linfo><ProjectLink href=""><ProjectImg src="/images/readmeGen.png" alt="img of README Generator ReadMe" /></ProjectLink></Linfo><br />
            </ProjectUl>

            <Nav>
                <AboutNav to="/">Home</AboutNav>
                <AboutNav to="/contact">Contact</AboutNav>
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