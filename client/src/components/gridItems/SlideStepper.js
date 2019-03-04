import React from 'react';
import PropTypes from 'prop-types';
import SwipableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import Slide from './Slide';
import FullSize from '../common/spacing/FullSize';

const AutoPlaySwipableViews = autoPlay(SwipableViews);
const StyledAutoPlaySwipableViews = styled(AutoPlaySwipableViews)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  > div {
    height: 100%;
    width: 100%;
  }
`;

class SlideStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };

    // bind 'this' to functions so we don't have to pass this
    // on every function call
    this.handleChangeSlide = this.handleChangeSlide.bind(this);
  }

  handleChangeSlide(index) {
    this.setState({ slideIndex: index });
  }

  render() {
    const {
      children,
      autoplay,
      interval,
    } = this.props;

    const {
      slideIndex,
    } = this.state;

    return (
      <FullSize>
        <StyledAutoPlaySwipableViews
          autoplay={autoplay}
          interval={interval}
          index={slideIndex}
          onChangeIndex={this.handleChangeSlide}
        >
          {children}
        </StyledAutoPlaySwipableViews>
      </FullSize>
    );
  }
}

SlideStepper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.instanceOf(Slide),
    ),
    PropTypes.string,
  ]),
  interval: PropTypes.number,
  autoplay: PropTypes.bool,
};

SlideStepper.defaultProps = {
  children: <div />,
  interval: 2000,
  autoplay: true,
};

export default SlideStepper;
