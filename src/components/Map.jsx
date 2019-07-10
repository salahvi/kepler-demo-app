import React from "react";

import KeplerGl from "kepler.gl";

const Map = props => {
  return (
    <KeplerGl
      id="foo"
      mapboxApiAccessToken={props.token}
      width={props.width}
      height={props.height}
    />
  );
};

export default Map;
