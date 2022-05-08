import styled, {keyframes} from "styled-components";
import { Link } from 'react-router-dom';

export const TerminalBackground = styled.img`
    background-image: url("/public/images/retro.png");
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    object-fit:fill;
    transform: translate(-50%, -50%);
    z-index: -1;
    display: block;
`;

export const Retro = styled.section`
    *{
      font-family: 'retro', sans-serif;
      color: #4af626;
      -webkit-text-stroke: 1px #4af626;
      text-shadow: 0 0 10px #4af626,
                      0 0 20px #4af626,
                      0 0 40px #4af626,
                      0 0 80px #4af626,
                      0 0 120px #4af626,
                      0 0 160px #4af626;
        overflow: visible;
    }
    `;

export const typewriter = keyframes`
from {width: 0;}
to {width: 100%;}
`;
export const blink = keyframes`
from, to { border-color: transparent; }
50% { border-color: #4af626; }
`;

export const Title = styled.span`
    font-size: 30px;
    position: absolute;
    top: 20%;
    left: 25%;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      height: 80%;
      width: 100%;
      overflow: hidden;
      border-right: .15em solid #4af626;
      white-space: nowrap;
      margin:0 auto;
      animation: ${typewriter} 5s steps(52, end), ${blink} 1s step-end 5.5s infinite;
    }
`;


export const AboutNav = styled(Link)`
    padding: 10px;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
`;

export const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  right: 10%;
  top: 10%;
`;

export const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 0 20px;
    position: absolute;
    top: 60%;
    left: 25%;
`;

export const Bio = styled.p`
    font-size: 20px;
`;

export const Ul = styled.ul`
    list-style: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 0 20px;
    position: absolute;
    top: 35%;
    left: 25%;
`;

export const Linfo = styled.li`
    font-size: 20px;
`;

export const ProjectLink = styled.a`
    outline-width: 2px;
    outline-style: solid;
    outline-color: #4af626;
    box-shadow: 0 0 1px #4af626,
            0 0 10px #4af626,
            0 0 40px #4af626,
            0 0 90px #4af626,
            0 0 120px #4af626;
`;
