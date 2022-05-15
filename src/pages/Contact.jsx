import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import '../components/App.css';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { Contact, ContactCon } from '../components/global.styles';
import { TerminalBackground, Nav, AboutNav, Retro, Title, FormSection, Form, Button, Input, TextArea } from '../components/about-project.styles'
import retro from '../images/retro.png'

export default function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0tnb9by', 'template_zylyoiq', form.current, 's_lfwLJtljsMGyFs8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
      

    return (
        <Retro>
            <TerminalBackground className='terminalBackground' src={retro} alt="terminal background" />
            <Title>Fill in  contact form below to reach Justyn Subrai.</Title>

            <Nav>
                <AboutNav to="/">Home</AboutNav>
                <AboutNav to="/about">About</AboutNav>
                <AboutNav to="/projects">Projects</AboutNav>
            </Nav>


            <FormSection>
                <Form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Input type="text" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <Input type="email" name="email"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <TextArea name="message" rows="5"/>
                    </div>
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