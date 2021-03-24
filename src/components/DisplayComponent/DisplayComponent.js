import VideoInformation from "../VideoInformation/VideoInformation";
import useAppContext from "../context/useAppContext";
import ReactPlayer from "react-player";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function DisplayComponent() {
  const { selectedVideo, playing, volume } = useAppContext();
  const classes = useStyles();

  return (
    <>
      {selectedVideo == null ? (
        <></>
      ) : (
        <Container maxWidth="md" className={classes.container}>
          <ReactPlayer
            url={selectedVideo.sources[0]}
            playing={playing}
            volume={volume}
            width="90%"
            height="90%"
            /*   controls */ //TWO ways to see controls in a react Player // ENABLE "controls" TO SEE DEFAULT CONTROLS
          />
          <VideoInformation selectedVideo={selectedVideo} />
        </Container>
      )}
    </>
  );
}
