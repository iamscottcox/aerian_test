import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUserLocation } from "../logic/user";
import { FETCH_ERROR } from "../constants";
import { GEOLOCATION_UNSUPPORTED } from "../constants/user";
import { getUserLocation, getUserFetching } from "../getters/user";

export const Location = ({ location, fetching }) => {
  useEffect(() => {
    fetchUserLocation();
  }, []);

  if (location === GEOLOCATION_UNSUPPORTED) {
    return <p>Geolocation is not supported in this browser</p>;
  }

  if (fetching === true) {
    return <p>Loading...</p>;
  }

  if (location === FETCH_ERROR) {
    return <p>There was a problem fetching the location data.</p>;
  }

  return null;
};

export const mapStateToProps = state => ({
  location: getUserLocation(state),
  fetching: getUserFetching(state)
});

export default connect(mapStateToProps)(Location);
