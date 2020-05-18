import LinkBase from 'next/link';
import styled from 'styled-components';

import { Container } from '../components';

function LinkCustom({ as, children, className, href }) {
  return (
    <li className={className}>
      <LinkBase href={href} as={as} passHref>
        <a>{children}</a>
      </LinkBase>
    </li>
  );
}

const Menu = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Link = styled(LinkCustom)`
  /* box-shadow: 0 0 0 1px red; */
  display: flex;
  flex: 1;
  margin: 0 30px;

  &:first-of-type {
    flex: 0;
    margin-left: 0;
  }

  &:last-of-type {
    flex: 0;
    margin-right: 0;
  }

  &:nth-of-type(even) {
    justify-content: flex-start;
  }

  &:nth-of-type(odd) {
    justify-content: flex-end;
  }

  a {
    color: ${({ theme }) => theme.typography.link.color};
    font-size: 12px;
    padding: 0 10px;
    letter-spacing: 3px;
    text-decoration: none;

    &:visited {
      color: ${({ theme }) => theme.typography.link.color};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  width: 100%;
`;

const Avatar = styled.div`
  background: url(${({ source }) => source});
  background-size: 101%;
  border-radius: 50%;
  flex: 0 0 52px;
  height: 52px;
`;

const StyledHeader = styled(Container).attrs({ as: 'header' })`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 75px;
  position: relative;

  nav {
    display: flex;
    width: 100%;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <AvatarWrapper>
        <Avatar
          source="/assets/me.jpg"
          title="Leandro on photo in black and white."
        />
      </AvatarWrapper>
      <nav>
        <Menu>
          <Link href="#photography">Photography</Link>
          <Link href="#about">About</Link>
          <Link href="#resume">Resume</Link>
          <Link href="#contact">Contact</Link>
        </Menu>
      </nav>
    </StyledHeader>
  );
}

export default Header;

