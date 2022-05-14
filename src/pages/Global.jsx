import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import '../components/App.css';
import { Contact, ContactCon} from '../components/global.styles';

export default function Global() {
    return (
        <Contact >
            <ContactCon>
                <a href="https://github.com/JustynSubrai"><FaGithub size={30} /></a>
                <Link to='/contact'><AiOutlineMail size={30} /></Link>
                <a href="https://www.linkedin.com/in/justyn-subrai-856584224/"><AiFillLinkedin size={30}/></a>
                <a><IoIosPaper size={30} /></a>
            </ContactCon>
        </Contact>
    )
}