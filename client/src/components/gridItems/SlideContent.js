import React from 'react';
import PropTypes from 'prop-types';
import { FullSize } from '../common/spacing';
import styled from 'styled-components';

const renderContent = (type, content) => {
  switch(type) {
    case 'image':
      return (
        <FullSize
          as={'img'}
          src={content ? content.imagePath : ''}
          alt={content ? content.imageLabel : ''}
        />
      );
  }
};

const SlideContent = (props) => {
  const {type, content} = props;
  return (
    renderContent(type, content)
  );
};

SlideContent.propTypes = {
  type: PropTypes.oneOf(['image']),
  content: PropTypes.shape({
    imagePath: PropTypes.string,
    imageLabel: PropTypes.string
  })
};

export default SlideContent;