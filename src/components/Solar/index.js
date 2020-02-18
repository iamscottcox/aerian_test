import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchUserSunriseAndSunset } from "../../logic/solar";
import { getSolarFetching, getSolarData } from "../../getters/solar";
import { getUserLocation } from "../../getters/user";
import { Sunrise } from "./Sunrise";
import { Sunset } from "./Sunset";
import { FETCH_ERROR } from "../../constants";

export const Solar = ({ location, data, fetching }) => {
  useEffect(() => {
    fetchUserSunriseAndSunset();
  }, [location]);

  if (data === FETCH_ERROR) {
    return (
      <div className="sunset-sunrise-container">
        <p>There was an error fetching the sunrise and sunset data</p>
      </div>
    );
  } else if (fetching === true) {
    return (
      <div className="sunset-sunrise-container">
        <p className="loading-icon">Loading...</p>
      </div>
    );
  } else if (data !== null) {
    return (
      <div className="sunet-sunrise-container">
        <Sunrise sunrise={data.sunrise} />
        <Sunset sunset={data.sunset} />
      </div>
    );
  } else {
    return null;
  }
};

export const mapStateToProps = state => ({
  location: getUserLocation(state),
  data: getSolarData(state),
  fetching: getSolarFetching(state)
});

export default connect(mapStateToProps)(Solar);
