import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UI_ACTIONS from "./actions/ui_actions";
import Piano from "./components/App/Piano";

class App extends React.Component {
  render() {
    return <Piano />;
  }
}
function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
