import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Contact = styled.footer`
    height: 150px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    *{
    color: ${(props) => props.BackgroundColor};
    }
  `;
// rgb(77, 200, 237)
export const ContactCon = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
  `;