/* This function renders all grid items in the layout array. It creates a div
 * with a remove button, and content. The content managed by a switch statement,
 * which output is based on the widget property from the grid items.
 */
import React from "react";
import Clock from "./Clock";
import Weather from "./Weather";
import ApplicationShortCut from './ApplicationShortCut';

const createElement = (element, handleRemove) => {
  const removeStyle = {
    position: "absolute",
    right: 10,
    top: 5,
    cursor: "pointer"
  };
  const index = element.i;
  const widget = element.widget;

  return (
    <div key={index} data-grid={element}>
      {(() => {
        switch (widget) {
          case "Clock":
            return <Clock/>;
          case "Photo":
            return <div className="photo"/>;
          case "Weather":
            return <Weather/>;
          case "ApplicationShortCut":
            return <ApplicationShortCut/>;
          default:
            return <div className="textWidget">{widget}</div>;
        }
      })()}
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

export {createElement};