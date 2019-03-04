import React from 'react';
import PropTypes from 'prop-types';
import TextTile from './TextTile';
import { Overlay, FullSize } from '../common/spacing';
import SlideContent from './SlideContent';

const Slide = (props) => {
  const {
    title,
    description,
    content,
  } = props;

  return (
    <FullSize>
      {title && description
        && (
          <Overlay
            verticalPosition="bottom"
            horizontalPosition="end"
          >
            <TextTile
              title={title}
              description={description}
            />
          </Overlay>
        )
      }
      <SlideContent
        type={content ? content.type : 'image'}
        content={content}
      />
    </FullSize>
  );
};

Slide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
};

Slide.defaultProps = {
  title: '',
  description: '',
};

export default Slide;
