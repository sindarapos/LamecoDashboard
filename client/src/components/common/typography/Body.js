import React from 'react';
import styled from 'styled-components';
import ExtendWithFont from "./ExtendWithFont";

const StyledBody = styled.p`
  font-size: 1em;
`;

const Body = (props) => {
  const { children } = props;
  return (
    <ExtendWithFont>
      <StyledBody>{children}</StyledBody>
    </ExtendWithFont>
  );
};


export default Body;