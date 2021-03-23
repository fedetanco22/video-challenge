import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import VideoControls from "../VideoControls/VideoControls";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import useAppContext from "../context/useAppContext";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    minWidth: 200,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    marginTop: 30,
  },
}));

export default function ControlsComponent() {
  const {
    videos,
    getVideos,
    getSelectedVideo,
    selectedVideo,
  } = useAppContext();

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    getVideos();
  }, []);

  const handleChange = (event) => {
    const id = event.target.value;
    getSelectedVideo(id, videos);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div id="Controls" className={classes.container}>
      <FormControl className={classes.formControl} component="fieldset">
        <InputLabel id="demo-controlled-open-select-label">
          Select Your Video
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}>
          {videos.map((video, idx) => {
            return (
              <MenuItem key={idx} value={`${video.id}`}>
                {video.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {selectedVideo ? (
        <VideoControls />
      ) : (
        <>
          <Typography variant="h3" className={classes.text}>
            Ready to start?
          </Typography>
        </>
      )}
    </div>
  );
}
