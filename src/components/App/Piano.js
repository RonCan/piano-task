import React from "react";
import styles from "../../styles/index.scss";
import WhiteKey from "../Elements/WhiteKey";
import BlackKey from "../Elements/BlackKey";
import keySounds from "../../constants/keySounds";
import * as UI_ACTIONS from "../../actions/ui_actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RecordingsDialog from "../Elements/RecordingsDialog";
import ControlPanel from "../Elements/ControlPanel";

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTune: [],
      recording: false,
      recordingsOpen: false
    };
  }

  handleClickOpen = () => {
    this.setState({ recordingsOpen: true });
  };

  handleClose = () => {
    this.setState({ recordingsOpen: false });
  };

  updateTune = key => {
    if (this.state.recording) {
      let currentTune = this.state.currentTune;
      currentTune.push(key);
      this.setState({ currentTune: currentTune });
    }
  };

  setRecording = (value) => {
    this.setState({recording: value});
  };

  render() {
    let whiteKeys = Array.from(Array(36).keys());
    return (
      <div>
        <RecordingsDialog
          open={this.state.recordingsOpen}
          handleClose={this.handleClose}
          listOfTunes={this.props.ui.listOfTunes}
          play={this.props.uiActions.playTune}
        />
        <ControlPanel
            openRecordings={this.handleClickOpen}
            recording={this.state.recording}
            setRecording={this.setRecording}
            currentTune={this.state.currentTune}
            playTune={this.props.uiActions.playTune}
            saveTune={this.props.uiActions.saveTune}
        />
        <div className={styles.wrapper}>
          {whiteKeys.map((value, index) => {
            if (index === 0 || index % 7 === 0) {
              return (
                <div
                  key={index}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  {[0, 1, 2].map((val, ind) => {
                    return (
                      <span
                        onClick={() => {
                          this.updateTune(index + ind);
                        }}
                      >
                        <WhiteKey
                          sound={keySounds[index + ind]}
                          key={`${index}${ind}`}
                        />
                      </span>
                    );
                  })}
                  <div style={{ position: "absolute", top: 0, left: 20 }}>
                    <BlackKey />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 54 }}>
                    <BlackKey />
                  </div>
                </div>
              );
            } else if ((index - 3) % 7 === 0) {
              return (
                <div style={{ position: "relative", display: "inline-block" }}>
                  {[0, 1, 2, 3].map((val, ind) => {
                    return (
                      <span
                        onClick={() => {
                          this.updateTune(index + ind);
                        }}
                      >
                        <WhiteKey
                          sound={keySounds[index + ind]}
                          key={`${index}${ind}`}
                        />
                      </span>
                    );
                  })}
                  <div style={{ position: "absolute", top: 0, left: 20 }}>
                    <BlackKey />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 54 }}>
                    <BlackKey />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 85 }}>
                    <BlackKey />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
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
)(Piano);
