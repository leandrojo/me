import styled from 'styled-components';

import { Container } from '../components';

const StyledHero = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  margin-bottom: 54px;

  .title {
    font-size: 48px;
    font-weight: 400;
    line-height: 1em;
    width: 50%;
  }

  .description {
    margin: 0;

    a {
      margin-right: 54px;
    }

    img {
      stroke: white;
    }
  }
`;

function Hero() {
  return (
    <StyledHero>
      <h1 className="title">
        Hello, I am Leandro, I am Software Developer.
      </h1>

      <p className="description">
        <a href="https://github.com/leandrojo">
          <img src="/assets/icons/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/leandroresume">
          <img src="/assets/icons/linkedin.svg" />
        </a>
        <a href="https://dribbble.com/leandro-araujo">
          <img src="/assets/icons/dribbble.svg" />
        </a>
      </p>
    </StyledHero>
  );
}

export default Hero;

