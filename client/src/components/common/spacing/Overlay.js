import styled from 'styled-components';
import PropTypes from 'prop-types';

const DEFAULT_PROPS = {
  Z_INDEX: 2
};

const interpretHorizontalPosition = (position) => {
  console.log("interpretting horizontal position", position);
  return position === 'end'
    ? 'flex-end'
    : 'flex-start';
};

const interpretVerticalPosition = (position) =>
  position === 'bottom'
    ? 'column-reverse'
    : 'column';

const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  ${(props) => `
    flex-direction: ${interpretVerticalPosition(props.verticalPosition)};
    align-items: ${interpretHorizontalPosition(props.horizontalPosition)};
    z-index: ${props.zIndex || DEFAULT_PROPS.Z_INDEX};
  `}
`;

Overlay.propTypes = {
  horizontalPosition: PropTypes.oneOf(['start', 'end']),
  verticalPosition: PropTypes.oneOf(['top', 'bottom'])
};

export default Overlay;