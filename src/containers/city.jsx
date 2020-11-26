import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveCity } from '../actions/index';

// TODO: remove this line and use Redux

const City = (props) => {
  return (
    <div>
      <div onClick={() => props.setActiveCity(props.city)}>
        <h2>{props.city.name}</h2>
        <p>{props.city.address}</p>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
