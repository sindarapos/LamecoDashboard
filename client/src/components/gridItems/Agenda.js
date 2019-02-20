import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AgendaItem from './AgendaItem';
import { FullSize } from '../common/spacing';

const VerticalList = styled(FullSize)`
  display: flex;
  flex-direction: column;
`;

const Agenda = (props) => {
  const {
    children,
    visibleItemCount,
  } = props;
  return (
    <VerticalList>
      {React.Children.toArray(children).slice(0, visibleItemCount)}
    </VerticalList>
  );
};

Agenda.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.instanceOf(AgendaItem),
      PropTypes.object,
      PropTypes.func,
    ]),
  ).isRequired,
  visibleItemCount: PropTypes.number,
};

Agenda.defaultProps = {
  visibleItemCount: 5,
};

export default Agenda;
