import React from "react";
import handleViewport from "react-in-viewport";

const useViewport = (props) => {
  const { forwardedRef } = props;

  return <div className="viewport-block" ref={forwardedRef} />;
};

export default handleViewport(useViewport);
