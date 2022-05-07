import styled from "styled-components";
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

export const AboutNav = styled(Link)`
    padding: 10px;
    text-decoration: none;
    font-size: 27px;
    font-weight: bold;
`;

export const Nav = styled.nav`
*{
-webkit-text-stroke: .1px rgb(187, 241, 241);
}
  position: fixed;
  z-index: 1;
  left: 15%;
`;