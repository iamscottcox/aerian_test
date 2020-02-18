import React from "react";

export const Sunset = ({ sunset }) => {
  if (!sunset) {
    return null;
  } else {
    return <p className="sunrise">Sunset: {sunset}</p>;
  }
};
