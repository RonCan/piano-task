import React from "react";
import styles from "../../styles/index.scss";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            save: false,
            name: ""
        };
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

  render() {
    return (
      <div
        id={styles.controls}
        style={{
          textAlign: "center",
          top: "40%",
          width: "100%",
          position: "absolute"
        }}
      >
        {!this.props.recording &&
          !this.state.save && (
            <Button
              variant="contained"
              size="small"
              onClick={()=>{this.props.setRecording(true)}}
            >
              <SaveIcon />
              Record
            </Button>
          )}
        {this.props.recording && (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              this.setState({ save: true });
              this.props.setRecording(false);
            }}
          >
            <SaveIcon />
            Stop
          </Button>
        )}
        {this.state.save && (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              this.props.playTune(this.props.currentTune);
            }}
          >
            <SaveIcon />
            Play
          </Button>
        )}
        {this.state.save && (
          <FormControl>
            <InputLabel htmlFor="name-simple">Name</InputLabel>
            <Input
              id="name-simple"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormControl>
        )}
        {this.state.save && (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              this.setState({
                save: false,
                currentTune: [],
                name: ""
              });
              this.props.setRecording(false);
              this.props.saveTune(
                this.state.name,
                this.props.currentTune
              );
            }}
          >
            <SaveIcon />
            Save
          </Button>
        )}
        {this.state.save && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              this.setState({
                save: false,
                currentTune: [],
                name: ""
              });
              this.props.setRecording(false);
            }}
          >
            Delete
            <DeleteIcon />
          </Button>
        )}
        <Button
          variant="contained"
          size="small"
          onClick={this.props.openRecordings}
        >
          <SaveIcon />
          List Tunes
        </Button>
      </div>
    );
  }
}

export default ControlPanel;
