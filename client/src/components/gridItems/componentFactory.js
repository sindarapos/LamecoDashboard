/* This function renders all grid items in the layout array. It creates a div
 * with a remove button, and content. The content managed by a switch statement,
 * which output is based on the widget property from the grid items.
 */
import React from 'react';
import Clock from './Clock';
import Weather from './Weather';
import ApplicationShortCut from './ApplicationShortCut';
import SlideStepper from './SlideStepper';
import Slide from './Slide';

const createElement = (element, handleRemove) => {
  const removeStyle = {
    position: 'absolute',
    right: 10,
    top: 5,
    cursor: 'pointer',
    zIndex: 100,
  };
  const index = element.i;
  const { widget } = element;

  return (
    <div key={index} data-grid={element}>
      {(() => {
        switch (widget) {
          case 'Clock':
            return <Clock />;
          case 'Photo':
            return <div className="photo" />;
          case 'Weather':
            return <Weather />;
          case 'ApplicationShortCut':
            return (
              <ApplicationShortCut
                title="Invision"
                onClick={() => window.location = 'https://invisionapp.com'}
              />
            );
          case 'Slide':
            return (
              <Slide
                title="Ze slide of slides"
                content={{
                  type: 'image',
                  imagePath: 'https://picsum.photos/200/300/?random',
                  imageLabel: 'Dis be image',
                }}
                description="Ze slide of slides"
              />
            );
          case 'SlideStepper':
            return (
              <SlideStepper
                autoplay
              >
                <Slide
                  title="Dem first slide"
                  description="A nice description, indeed."
                  content={{
                    type: 'image',
                    imagePath: 'https://picsum.photos/200/300/?random',
                    imageLabel: 'Dis be image',
                  }}
                />
                <Slide
                  title="Dis be second one"
                  description="Something to be reading?"
                  content={{
                    type: 'image',
                    imagePath: 'https://picsum.photos/400/300/?random',
                    imageLabel: 'Dis be image',
                  }}
                />
              </SlideStepper>
            );
          default:
            return <div className="textWidget">{widget}</div>;
        }
      })()}
      {/* @ToDo create new component for remove button */}
      <span
        className="remove"
        style={removeStyle}
        onClick={handleRemove}
      >
          x
      </span>
    </div>
  );
};

export default createElement;
