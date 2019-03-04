import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExtendWithFont from './ExtendWithFont';

const StyledHeading = styled.p`
  margin-top: 0;
  font-weight: bold;
  ${props => `
    font-size:
    ${(props.variant === 'normal' && '1em')
|| (props.variant === 'small' && '0.8125em')
|| (props.variant === 'large' && '1.2em')};
  `}
`;

const Heading = (props) => {
  const {
    variant,
    children,
    className,
    disableMarginBlockEnd,
    disableMarginBlockStart,
  } = props;

  return (
    <ExtendWithFont
      disableMarginBlockEnd={disableMarginBlockEnd}
      disableMarginBlockStart={disableMarginBlockStart}
    >
      <StyledHeading className={className} variant={variant}>{children}</StyledHeading>
    </ExtendWithFont>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  disableMarginBlockEnd: PropTypes.bool,
  disableMarginBlockStart: PropTypes.bool,
};

Heading.defaultProps = {
  variant: 'normal',
  className: '',
  disableMarginBlockEnd: false,
  disableMarginBlockStart: false,
};

export default Heading;
