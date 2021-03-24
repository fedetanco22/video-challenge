import { Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { makeStyles } from "@material-ui/core/styles";
import useAppContext from "../context/useAppContext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function VideoControls() {
  const {
    playing,
    playVideo,
    pauseVideo,
    volumeUp,
    volumeDown,
    mute,
    volume,
  } = useAppContext();

  const classes = useStyles();

  function handleVolumeUp() {
    if (volume < 0.9) {
      volumeUp(volume);
    } else {
      alert("MAX VOLUME");
    }
  }

  function handleVolumeDown() {
    if (volume > 0.1) {
      volumeDown(volume);
    } else {
      mute();
      return;
    }
  }

  return (
    <Container className={classes.container}>
      {!playing ? (
        <IconButton
          aria-label="play"
          color="primary"
          onClick={() => {
            playVideo();
          }}>
          <PlayArrowIcon />
        </IconButton>
      ) : (
        <IconButton
          aria-label="pause"
          color="disabled"
          onClick={() => {
            pauseVideo();
          }}>
          <PauseIcon />
        </IconButton>
      )}

      {volume > 0 ? (
        <IconButton
          color="secondary"
          aria-label="volumn"
          onClick={handleVolumeDown}>
          <VolumeDownIcon />
        </IconButton>
      ) : (
        <IconButton color="secondary" aria-label="volumn">
          <VolumeOffIcon />
        </IconButton>
      )}
      <IconButton
        color="secondary"
        aria-label="volumn"
        onClick={handleVolumeUp}>
        <VolumeUpIcon />
      </IconButton>
    </Container>
  );
}
