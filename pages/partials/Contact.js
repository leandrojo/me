import styled from 'styled-components';

import { Container, Heading, Link } from '../components';

const StyledContact = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 250px;
`;

function Contact() {
  return (
    <StyledContact id="#contact">
      <Heading>Contact</Heading>

      <p>
        You can find me on&nbsp;
        <Link href="https://www.linkedin.com/in/leandroresume">LinkedIn</Link> or&nbsp;
        <Link href="mailto:contato@leandroaraujo.me">write an email</Link>.
      </p>
      
      {/* <p>
        <Link href="#">Download CV</Link>
      </p> */}
    </StyledContact>
  );
}

export default Contact;

