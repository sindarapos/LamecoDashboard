import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FullSize } from '../common/spacing';

const StyledFullSizeImageCover = styled(FullSize)`
  ${props => `
    background: url(${props.imagePath}) no-repeat center center
  `}
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const renderContent = (type, content) => {
  switch (type) {
    case 'image':
      return (
        <StyledFullSizeImageCover
          imagePath={content ? content.imagePath : ''}
          title={content ? content.imageLabel : ''}
        />
      );

    default:
      return (
        <div />
      );
  }
};

const SlideContent = (props) => {
  const { type, content } = props;
  return (
    renderContent(type, content)
  );
};

SlideContent.propTypes = {
  type: PropTypes.oneOf(['image']),
  content: PropTypes.shape({
    imagePath: PropTypes.string,
    imageLabel: PropTypes.string,
  }),
};

export default SlideContent;
