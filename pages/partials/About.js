import styled from 'styled-components';

import { Container, Heading } from '../components';

const StyledAbout = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 250px;
  margin-top: 100px;

  p {
    width: 75%;
  }
`;

function About() {
  return (
    <StyledAbout id="#about">
      <Heading>About</Heading>

      <p>
        As a web developer, I enjoy using my obsessive attention to detail, 
        my unequivocal love for making things, and my mission-driven work 
        ethic to literally change the world. That's why I’m excited to make 
        a big impact at a high growth company.
      </p>
    </StyledAbout>
  );
}

export default About;

