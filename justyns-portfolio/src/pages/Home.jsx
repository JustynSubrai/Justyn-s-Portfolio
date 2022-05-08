import React from "react";
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { Contact, ContactCon} from '../components/global.styles';
import '../components/App.css';
import { HeadDiv, Title, Avatar, Video, Nav, Cyber, HomeNav } from '../components/home.styles';

function NavBar() {
    return (
        <Cyber>
            <HeadDiv>
                <Avatar className="avatar" src="/images/Cool-Profile-Picture-For-placeholder.jpg" alt="Profile Picture" height={125} width={125} />

                <Title>
                    Welcome To My Future
                </Title>

                <Nav>
                    <HomeNav to="/contact">Contact</HomeNav>
                    <HomeNav to="/about">About Me</HomeNav>
                    <HomeNav to="/projects">Projects</HomeNav>
                </Nav>
            </HeadDiv>

            <Video autoPlay loop muted>
                <source src="/images/rainy-cyber.mp4" type="video/mp4" />
            </Video>

            <Contact >
                <ContactCon>
                    <a href="https://github.com/JustynSubrai" target="_blank" rel="noreferrer"><FaGithub size={30}/></a>
                    <a href="mailto: justynskylarsubrai@gmail.com"><AiOutlineMail size={30}/></a>
                    <a href="https://www.linkedin.com/in/justyn-subrai-856584224/" target="_blank" rel="noreferrer"><AiFillLinkedin size={30}/></a>
                    <a href={process.env.PUBLIC_URL + "/JSubrai Resume Oct21.pdf"}
                    target="_blank" rel="noreferrer"><IoIosPaper size={30} /></a>
                </ContactCon>
            </Contact>

        </Cyber>
    );
};

export default NavBar;