import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExtendWithFont from './ExtendWithFont';

const StyledTitle = styled.h3`
  font-size: 2em;
  margin-top: 0;
`;

const Title = (props) => {
  const { children } = props;
  return (
    <ExtendWithFont>
      <StyledTitle>{children}</StyledTitle>
    </ExtendWithFont>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(styled),
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
};

export default Title;
