import React from 'react';
import PropTypes from 'prop-types';
import TextTile from './TextTile';
import styled from 'styled-components';
import { Overlay, FullSize } from '../common/spacing';
import SlideContent from "./SlideContent";

const Slide = (props) => {
  const {
    title,
    description,
    visible,
    content
  } = props;

  return (
    <FullSize>
      <Overlay
        verticalPosition={'bottom'}
        horizontalPosition={'end'}
      >
        <TextTile
          title={title}
          description={description}
        />
      </Overlay>
      <SlideContent
        type={content ? content.type : 'image'}
        content={content}
      />
    </FullSize>
  );
};

Slide.propTypes = {
  label: PropTypes.string,
  visible: PropTypes.bool,
  content: PropTypes.oneOf([PropTypes.string, PropTypes.func, PropTypes.object])
};

export default Slide;
