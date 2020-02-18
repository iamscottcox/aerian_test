import React from "react";

export const Sunrise = ({ sunrise }) => {
  if (!sunrise) {
    return null;
  } else {
    return <p className="sunrise">Sunrise: {sunrise}</p>;
  }
};
