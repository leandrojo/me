import styled from 'styled-components';

import { Container, Link } from '../components';

const StyledFooter = styled(Container).attrs({ as: 'footer' })``;

function Footer() {
  return (
    <StyledFooter>
      <p>
        Copyright © 2020 Leandro Araújo – &nbsp;
        <Link href="https://www.leandroaraujo.me">leandroaraujo.me</Link>
      </p>
    </StyledFooter>
  );
}

export default Footer;

