import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { FullSize } from '../common/spacing';
import { Caption, Body } from '../common/typography';

const AgendaItemContainer = styled(FullSize)`
  display:flex;
  justify-content: space-between;
  border-bottom: 1px #DEDEDE solid
`;
const EqualWidthContainer = styled.div`
  flex-grow: 1;
  max-width: 500px;
  padding: 24px;
  width: 50%;
`;

const EqualWidthContainerWithTopPadding = styled(EqualWidthContainer)``;

class AgendaItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // bind this to functions
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    alert('you clicked on a agenda item', this.title);
  }

  render() {
    const {
      title,
      start,
      end,
      dateFormat,
      timeFormat,
    } = this.props;

    return (
      <AgendaItemContainer>
        <EqualWidthContainer>
          <Caption>
            {title}
          </Caption>
        </EqualWidthContainer>
        <EqualWidthContainer>
          <Body variant="large">
            {start.format(dateFormat)}
          </Body>
          <Body variant="normal">
            { `van ${start.format(timeFormat)} tot ${end.format(timeFormat)}`}
          </Body>
        </EqualWidthContainer>
      </AgendaItemContainer>
    );
  }
}

AgendaItem.propTypes = {
  title: PropTypes.string,
  start: PropTypes.instanceOf(moment).isRequired,
  end: PropTypes.instanceOf(moment).isRequired,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
};

AgendaItem.defaultProps = {
  title: '',
  dateFormat: 'DD MMMM',
  timeFormat: 'HH:mm',
};

export default AgendaItem;
