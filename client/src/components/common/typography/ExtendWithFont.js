import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT,
  FONT_COLOR,
} from './constants';

const WithFont = styled.div`
  text-align: start;
  font-family: ${FONT_FAMILY};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT};
  ${props => `
    color: ${props.color};
    ${props.disableMarginBlockStart && '> * {margin-block-start: 0;}'}
    ${props.disableMarginBlockEnd && '> * {margin-block-end: 0;}'}
  `}
`;

const ExtendWithFont = (props) => {
  const {
    children, color, disableMarginBlockEnd, disableMarginBlockStart,
  } = props;
  return (
    React.Children.map(children, child => (
      <WithFont
        color={color}
        disableMarginBlockEnd={disableMarginBlockEnd}
        disableMarginBlockStart={disableMarginBlockStart}
      >
        {child}
      </WithFont>
    ))
  );
};

ExtendWithFont.proptypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  ),
  color: PropTypes.string,
  disableMarginBlockEnd: PropTypes.bool,
  disableMarginBlockStart: PropTypes.bool,
};

ExtendWithFont.defaultProps = {
  color: FONT_COLOR.BLACK,
  disableMarginBlockEnd: true,
  disableMarginBlockStart: true,
};

export default ExtendWithFont;
