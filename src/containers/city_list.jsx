import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';

import City from "../containers/city";

// TODO: remove this line and use Redux
class CityList extends Component {
  static defaultProps = []

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
