import React from "react"
import '../components/App.css';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { Contact, ContactCon} from '../components/global.styles';
import { TerminalBackground, AboutNav, Nav, Title, Retro, Info, Bio, Ul, Linfo, getDate } from '../components/about-project.styles'

export default function About() {
    return (
        <Retro>

            <Title>Gathering information on specimen 0: Justyn Subrai.</Title>

            <TerminalBackground src="/images/retro.png" alt="terminal background" />
            <Nav>
                <AboutNav to="/">Home</AboutNav>
                <AboutNav to="/about">About</AboutNav>
                <AboutNav to="/projects">Projects</AboutNav>
            </Nav>

            <Ul>
                <Linfo>DOB: September 25th, 2000</Linfo><br />
                <Linfo>Coding Knowledge: Javascript, Css, HTML5, JSX, MongoDb, Mongoose, ExpressDb, React.js, Node.js, MVC, OOP, MySql, and Sequelize. <br /> <br />Also Knowledge of toolkits/libraries like: react-router-dom, bootstrap, styled-components, handlebars.js and a various amount of others</Linfo><br />
            </Ul>


            <Info>
                <Bio>Justyn is a freelance MERN fullstack developer based in California, United States. Justyn enjoys building everything small business sites to rich interactive web apps/api. If you are a buisness seeking a web presence or an employer looking to hire, you can contact him with any forms of contact below.</Bio>
            </Info>

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