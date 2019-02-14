import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Body,
  Title
} from '../common/typography';

const StyledContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 3%;
`;

const TextTile = (props) => {
  const {
    title,
    description
  } = props;
  return (
    <StyledContainer>
      <Title>{title}</Title>
      <Body>{description}</Body>
    </StyledContainer>
  )
};

TextTile.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string
};

export default TextTile;
