import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExtendWithFont from './ExtendWithFont';

const StyledBody = styled.p`
  ${props => `
    margin-top: 0;
    font-size:
    ${(props.variant === 'normal' && '1em')
    || (props.variant === 'small' && '0.8125em')
    || (props.variant === 'large' && '1.2em')};
  `}
`;

const Body = (props) => {
  const {
    variant,
    children,
    className,
  } = props;

  return (
    <ExtendWithFont>
      <StyledBody className={className} variant={variant}>{children}</StyledBody>
    </ExtendWithFont>
  );
};

Body.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};

Body.defaultProps = {
  variant: 'normal',
  className: '',
};

export default Body;