import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExtendWithFont from './ExtendWithFont';

const StyledTitle = styled.h3`
  font-size: 1.5em;
  margin-top: 0;
  line-height: 1.5em;
`;

const Caption = (props) => {
  const { children, color } = props;
  return (
    <ExtendWithFont color={color}>
      <StyledTitle>{children}</StyledTitle>
    </ExtendWithFont>
  );
};

Caption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(styled),
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  color: PropTypes.string,
};

Caption.defaultProps = {
  color: null,
}

export default Caption;
