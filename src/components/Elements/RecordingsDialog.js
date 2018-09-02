import React from "react";
import styles from "../../styles/index.scss";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class RecordingsDialog extends React.Component {
  render() {
    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onClose={this.props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Previous Recordings
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {this.props.listOfTunes.map((row, index) => {
            return (
              <div
                onClick={() => {
                  this.props.play(row.tune);
                }}
                key={index}
              >
                <ListItem button>
                  <ListItemText primary={row.name} secondary="Click to Play" />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </Dialog>
    );
  }
}

export default RecordingsDialog;
