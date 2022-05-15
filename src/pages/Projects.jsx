import { Contact, ContactCon } from '../components/global.styles';
import { TerminalBackground, Nav, AboutNav, Retro, Title, Linfo, ProjectLink, ProjectUl, ProjectImg, GitHubLink} from '../components/about-project.styles'
import retro from '../images/retro.png'
import React from "react";
import '../components/App.css';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';;

export default function Projects() {
    return (
        <Retro>
            <TerminalBackground className='terminalBackground' src={retro} alt="terminal background" />
            <Title>Gathering documents for specimen 0: Justyn Subrai.</Title>

            <ProjectUl>
            <Linfo>
                    <ProjectLink href="https://swindle-shop.herokuapp.com/" target="_blank" rel="noreferrer">
                        <ProjectImg src="/images/swindleShop.png" alt="img of Swindle Shop mockup" />
                        <GitHubLink href="https://github.com/JustynSubrai/Swindle-Shop" target="_blank" rel="noreferrer"><FaGithub size={30}/></GitHubLink>
                    </ProjectLink>
                </Linfo><br />

                <Linfo>
                    <ProjectLink href="https://budget-tracker-app-project.herokuapp.com/" target="_blank" rel="noreferrer">
                        <ProjectImg src="/images/budgetTracker.png" alt="img of Budget Tracker mockup" />
                        <GitHubLink href="https://github.com/JustynSubrai/Budget-Tracker"target="_blank" rel="noreferrer"><FaGithub size={30}/></GitHubLink>
                    </ProjectLink>
                </Linfo><br />

                <Linfo>
                    <ProjectLink href="https://justynsubrai.github.io/Team-Profile-Generator/" target="_blank" rel="noreferrer">
                        <ProjectImg src="/images/teamGenerator.png" alt="img of team profile generator ReadMe" />
                        <GitHubLink href="https://github.com/JustynSubrai/Team-Profile-Generator"target="_blank" rel="noreferrer"><FaGithub size={30}/></GitHubLink>
                    </ProjectLink>
                </Linfo><br />

                <Linfo>
                    <ProjectLink href="https://justynsubrai.github.io/Road-Buddy/" target="_blank" rel="noreferrer">
                        <ProjectImg src="/images/roadbuddyScreenshot.png" alt="img of RoadBuddy mockup" />
                        <GitHubLink href="https://github.com/JustynSubrai/Road-Buddy"target="_blank" rel="noreferrer"><FaGithub size={30}/></GitHubLink>
                    </ProjectLink>
                </Linfo><br />

                <Linfo>
                    <ProjectLink href="https://justynsubrai.github.io/Social-Network-API/" target="_blank" rel="noreferrer">
                        <ProjectImg src="/images/socialApi.png" alt="img of Social Network Api ReadMe" />
                        <GitHubLink href="https://github.com/JustynSubrai/Social-Network-API"target="_blank" rel="noreferrer"><FaGithub size={30}/></GitHubLink>
                    </ProjectLink>
                </Linfo><br />

                <Linfo>
                    <ProjectLink href="https://justynsubrai.github.io/Interactive-README-gen/" target="_blank" rel="noreferrer">
                        <ProjectImg src="/images/readmeGen.png" alt="img of README Generator ReadMe" />
                        <GitHubLink href="https://github.com/JustynSubrai/Interactive-README-gen"target="_blank" rel="noreferrer"><FaGithub size={30}/></GitHubLink>
                    </ProjectLink>
                </Linfo><br />
            </ProjectUl>

            <Nav>
                <AboutNav to="/">Home</AboutNav>
                <AboutNav to="/contact">Contact</AboutNav>
                <AboutNav to="/about">About</AboutNav>
                <AboutNav to="/projects">Projects</AboutNav>
            </Nav>

            <Contact >
                <ContactCon>
                    <a href="https://github.com/JustynSubrai" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
                    <a href="mailto: justynskylarsubrai@gmail.com"><AiOutlineMail size={30}/></a>
                    <a href="https://www.linkedin.com/in/justyn-subrai-856584224/" target="_blank" rel="noreferrer"><AiFillLinkedin size={30} /></a>
                    <a href={process.env.PUBLIC_URL + "/JSubrai Resume Oct21.pdf"}
                    target="_blank" rel="noreferrer"><IoIosPaper size={30} /></a>
                </ContactCon>
            </Contact>

        </Retro>
    )
}