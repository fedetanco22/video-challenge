import { Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function VideoControls() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <IconButton aria-label="play">
        <PlayArrowIcon />
      </IconButton>
      <IconButton aria-label="pause" disabled color="primary">
        <PauseIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="volumn">
        <VolumeDownIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="volumn">
        <VolumeUpIcon />
      </IconButton>
    </Container>
  );
}
