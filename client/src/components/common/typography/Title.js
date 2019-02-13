import React from 'react';
import styled from 'styled-components';
import ExtendWithFont from "./ExtendWithFont";

const StyledTitle = styled.h3`
  font-size: 2em;
`;

const Title = (props) => {
  const {children} = props;
  return (
    <ExtendWithFont>
      <StyledTitle>{children}</StyledTitle>
    </ExtendWithFont>
  )
};


export default Title;