import styled from 'styled-components';

const Link = styled.a`
  border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};
  color: inherit;
  display: inline-block;
  padding: 1px;
  text-decoration: none;
`;

export default Link;
