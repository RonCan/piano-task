import React from "react";
import styles from "../../styles/index.scss";
import Button from "@material-ui/core/Button";

class BlackKey extends React.Component {
  keyPress(keySound) {
    this.audio = new Audio(keySound);
    this.audio.play();
  }
  render() {
    return (
      <Button
        className={styles.blackKey}
        variant="contained"
        onClick={() => {
          this.keyPress(require("../../../grand-piano-mp3-sounds/A1.mp3"));
        }}
      />
    );
  }
}

export default BlackKey;
