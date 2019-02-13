import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT
} from './constants';

const StyledTitle = styled.h3`
  font-size: 2em;
`;

const WithFont = styled.div`
  font-family: ${FONT_FAMILY};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT};
`;

const ExtendWithFont = (props) => {
  const { children } = props;
  return (
    React.Children.map(children, (child) =>
      //@Todo merge styles instead of wrapping in a div
      <WithFont>
        {child}
      </WithFont>
    )
  );
};

ExtendWithFont.proptypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  )
};

export default ExtendWithFont;