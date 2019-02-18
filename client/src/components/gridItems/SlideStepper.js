import React from 'react';
import PropTypes from 'prop-types';
import SwipableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import Slide from './Slide';
import FullSize from "../common/spacing/FullSize";

const AutoPlaySwipableViews = autoPlay(SwipableViews);

const StyledAutoPlaySwipableViews = styled(AutoPlaySwipableViews)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  > div {
    height: 100%;
    width: 100%;
    
    > div {
      height: 100%;
      width: 100%;
      
      > div {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

class SlideStepper extends React.Component {

  state = {
    slideIndex: 0
  };

  handleChangeSlide = (index) => {
    this.setState({slideIndex: index});
  };

  render() {
    const {
      children,
      autoPlay,
      interval
    } = this.props;

    const {
      slideIndex
    } = this.state;

    return (
      <FullSize>
        <StyledAutoPlaySwipableViews
          autoPlay={autoPlay}
          interval={interval}
          index={slideIndex}
          onChangeIndex={this.handleChangeSlide}
        >
          {children}
        </StyledAutoPlaySwipableViews>
      </FullSize>
    );
  };
}

SlideStepper.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.instanceOf(Slide)),
  interval: PropTypes.number,
  autoPlay: PropTypes.bool,
};

export default SlideStepper;