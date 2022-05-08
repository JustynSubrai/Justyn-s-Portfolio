import React, {useState} from "react";
import { Link } from 'react-router-dom';
import '../components/App.css';
import { validateEmail } from '../utils/helpers';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { Contact, ContactCon } from '../components/global.styles';
import { TerminalBackground, Nav, AboutNav, Retro, Title, FormSection, Form, Button, Input, TextArea } from '../components/about-project.styles'

export default function ContactPage() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <Retro>
            <TerminalBackground className='terminalBackground' src="/images/retro.png" alt="terminal background" />
            <Title>Fill in  contact form below to reach Justyn Subrai.</Title>

            <Nav>
                <AboutNav to="/">Home</AboutNav>
                <AboutNav to="/about">About</AboutNav>
                <AboutNav to="/projects">Projects</AboutNav>
            </Nav>


            <FormSection>
                <Form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <Input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <TextArea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <Button type="submit">Submit</Button>
                </Form>
            </FormSection>

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