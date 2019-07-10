import React, { Component } from "react";
import Map from "./Map";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";
import { MAPBOX_TOKEN } from "../constants/MapBox";
import { addData } from "../actions/AddKeplerData";
import "mapbox-gl/dist/mapbox-gl.css";

class App extends Component {
  componentDidMount() {
    this.props.addData();
  }

  render() {
    return (
      <div className="App">
        <div className="map">
          <Map
            token={MAPBOX_TOKEN}
            width={window.innerWidth}
            height={window.innerHeight}
            getState={state => state.keplerGl}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({
  addData: bindActionCreators(addData, dispatch)
});

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
