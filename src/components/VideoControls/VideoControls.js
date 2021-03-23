import { Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
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
    playVideo,
    pauseVideo,
    volumeUp,
    volumeDown,
    volume,
  } = useAppContext();

  const classes = useStyles();

  function handleVolumeUp() {
    if (volume < 1) {
      const hola = (prevVolume) => {
        let volume = prevVolume + 0.1;
        volumeUp(volume);
        return volume;
      };
    }
  }

  return (
    <Container className={classes.container}>
      <IconButton
        aria-label="play"
        onClick={() => {
          playVideo();
        }}>
        <PlayArrowIcon />
      </IconButton>
      <IconButton
        aria-label="pause"
        color="primary"
        onClick={() => {
          pauseVideo();
        }}>
        <PauseIcon />
      </IconButton>
      <IconButton
        color="secondary"
        aria-label="volumn"
        onClick={() => {
          volumeDown();
        }}>
        <VolumeDownIcon />
      </IconButton>
      <IconButton
        color="secondary"
        aria-label="volumn"
        onClick={handleVolumeUp}>
        <VolumeUpIcon />
      </IconButton>
    </Container>
  );
}
