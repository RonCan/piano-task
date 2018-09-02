import React from "react";
import styles from "../../styles/index.scss";
import Button from "@material-ui/core/Button";

class WhiteKey extends React.Component {
  keyPress(keySound) {
    this.audio = new Audio(keySound);
    this.audio.play();
  }
  render() {
    return (
      <Button
        className={styles.whiteKey}
        variant="contained"
        onClick={() => {
          this.keyPress(this.props.sound);
        }}
      />
    );
  }
}

export default WhiteKey;
