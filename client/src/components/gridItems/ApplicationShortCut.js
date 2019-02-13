import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../common/typography';
import { Justify } from '../common/spacing';

const ApplicationShortCut = (props) => {
  const {
    title,
    onClick,
  } = props;
  return (
    <Justify
      onClick={onClick}
    >
      <Title onClick={onClick}>
        {title}
      </Title>
    </Justify>
  );
};

ApplicationShortCut.propTypes = {
  title: PropTypes.string,
  iconType: PropTypes.string,
  onClick: PropTypes.func,
};

export default ApplicationShortCut;