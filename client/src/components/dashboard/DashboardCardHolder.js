import React from "react";
import PropTypes from "prop-types";

const DashboardCardHolder = children => {
  return <div className="cardHolder">{children}</div>;
};

DashboardCardHolder.propTypes = {
  children: PropTypes.object.isRequired
};

export default DashboardCardHolder;
