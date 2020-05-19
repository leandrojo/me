import styled from 'styled-components';

import { Container, Heading } from '../components';

const StyledPhotography = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 250px;
`;

function Photography() {
  return (
    <StyledPhotography>
      <Heading>Photography</Heading>
    </StyledPhotography>
  );
}

export default Photography;

