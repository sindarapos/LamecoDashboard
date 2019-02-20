import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import { FullSize } from '../common/spacing';
import { Caption, Heading, Body } from '../common/typography';
import { AGENDA_TYPES, AGENDA_TYPE_COLORS } from './constants';

const AgendaItemContainer = styled(FullSize)`
  ${props => `
    border-bottom: ${props.bottomBorder ? '1px rgba(112, 112, 112, 0.23) solid' : ''};
    background-color: ${props.backgroundColor}
  `}
`;

const FlexContainer = styled.div`
  display:flex;
`;
const DescriptionContainer = styled(FlexContainer)`
  padding: 24px;
`;

const EqualWidthContainer = styled.div`
  padding: 24px;
  max-width: 500px;
  width: 50%;
`;

const HeadingWithTopPadding = styled(Heading)`
  padding-top: 0.42em;
`;

class AgendaItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    // bind this to functions
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose(event) {
    event.stopPropagation();
    this.setState({ open: false });
  }

  handleOnClick(event) {
    event.stopPropagation();
    const { disableOpen } = this.props;
    if (!disableOpen) this.handleOpen();
  }

  render() {
    const {
      title,
      start,
      end,
      dateFormat,
      timeFormat,
      bottomBorder,
      disableOpen,
      description,
      showDescription,
      type,
    } = this.props;

    const {
      open,
    } = this.state;

    return (
      <AgendaItemContainer
        bottomBorder={bottomBorder}
        onClick={this.handleOnClick}
        backgroundColor={AGENDA_TYPE_COLORS[type]}
      >
        <FlexContainer>
          <EqualWidthContainer>
            <Caption>
              {title}
            </Caption>
          </EqualWidthContainer>
          <EqualWidthContainer>
            <HeadingWithTopPadding variant="large">
              {start.format(dateFormat)}
            </HeadingWithTopPadding>
            <Body variant="normal">
              {`van ${start.format(timeFormat)} tot ${end.format(timeFormat)}`}
            </Body>
          </EqualWidthContainer>
        </FlexContainer>
        {showDescription
          && (
          <DescriptionContainer>
            <Body>
              {description}
            </Body>
          </DescriptionContainer>
          )
        }
        <Dialog
          open={open && !disableOpen}
          onClose={this.handleClose}
        >
          <AgendaItem
            {...this.props}
            bottomBorder={false}
            disableOpen
            showDescription
            code="child"
          />
        </Dialog>
      </AgendaItemContainer>
    );
  }
}

AgendaItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  start: PropTypes.instanceOf(moment).isRequired,
  end: PropTypes.instanceOf(moment).isRequired,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  bottomBorder: PropTypes.bool,
  disableOpen: PropTypes.bool,
  showDescription: PropTypes.bool,
  code: PropTypes.string,
  type: PropTypes.oneOf(AGENDA_TYPES),
};

AgendaItem.defaultProps = {
  title: '',
  description: '',
  dateFormat: 'DD MMMM',
  timeFormat: 'HH:mm',
  bottomBorder: true,
  disableOpen: false,
  showDescription: false,
  code: 'parent',
  type: AGENDA_TYPES.APPOINTMENT,
};

export default AgendaItem;
