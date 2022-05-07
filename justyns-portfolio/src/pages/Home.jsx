import React from "react";
import { Link } from 'react-router-dom';
import '../components/App.css';
import { HeadDiv, Title, Avatar, Video, Nav, Cyber, HomeNav} from '../components/home.styles';

function NavBar() {
        return(
        <Cyber>
                <HeadDiv>
                    <Avatar className="avatar" src="/images/Cool-Profile-Picture-For-placeholder.jpg" alt="Profile Picture" height={125} width={125} />

                    <Title>
                        Welcome To My Future
                    </Title>

                    <Nav>
                        <HomeNav to="/">Home</HomeNav>
                        <HomeNav to="/about">About Me</HomeNav>
                        <HomeNav to="/projects">Projects</HomeNav>
                    </Nav>
                </HeadDiv>

                <Video autoPlay loop muted>
                    <source src="/images/rainy-cyber.mp4" type="video/mp4" />
                </Video>
        </Cyber>
    );
};

export default NavBar;