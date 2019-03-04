import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Body,
  Caption,
} from '../common/typography';
import { FONT_COLOR } from '../common/typography/constants';

const StyledContainer = styled.div`  background-color: rgba(255, 255, 255, 0.9);
  padding: 3%;
  border-radius: 10px 0 0 0;
`;

const TextTile = (props) => {
  const {
    title,
    description,
  } = props;
  return (
    <StyledContainer>
      <Caption color={FONT_COLOR.BLUE}>{title}</Caption>
      <Body>{description}</Body>
    </StyledContainer>
  );
};

TextTile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

TextTile.defaultProps = {
  description: null,
};

export default TextTile;
