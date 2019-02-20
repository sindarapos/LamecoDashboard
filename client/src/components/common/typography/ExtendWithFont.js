import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT,
} from './constants';

const WithFont = styled.div`
  text-align: start;
  font-family: ${FONT_FAMILY};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT};
`;

const ExtendWithFont = (props) => {
  const { children } = props;
  return (
    React.Children.map(children, child => (
      <WithFont>
        {child}
      </WithFont>
    ))
  );
};

ExtendWithFont.proptypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  ),
};

export default ExtendWithFont;
