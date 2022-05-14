import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cyber = styled.header`
    *{
        font-family: 'cyber', sans-serif;
        color: rgb(77, 200, 237);
        -webkit-text-stroke: 1px rgb(187, 241, 241);
        text-shadow: 0 0 10px rgb(77, 200, 237),
                        0 0 20px rgb(77, 200, 237),
                        0 0 40px rgb(77, 200, 237),
                        0 0 80px rgb(77, 200, 237),
                        0 0 120px rgb(77, 200, 237),
                        0 0 160px rgb(77, 200, 237);
    }
`;

export const HeadDiv = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 50px;
`;

export const Avatar = styled.img`
outline-width: 2px;
outline-style: solid;
outline-color: rgb(187, 241, 241);
box-shadow: 0 0 1px rgb(77, 200, 237),
        0 0 5px rgb(77, 200, 237),
        0 0 15px rgb(77, 200, 237),
        0 0 30px rgb(77, 200, 237),
        0 0 90px rgb(77, 200, 237);
  position:absolute;
  top: 50%;
  right: 80%;
  transform: translate(-100%, -50%);
  border-radius: 15%;
`;

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  display: block;
  margin: 0 auto;
`;

export const Nav = styled.nav`
*{
-webkit-text-stroke: .1px rgb(187, 241, 241);
}
  position: fixed;
  z-index: 1;
  left: 15%;
`;

export const HomeNav = styled(Link)`
    padding: 10px;
    text-decoration: none;
    font-size: 27px;
    font-weight: bold;
`;