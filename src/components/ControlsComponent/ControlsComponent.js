import React, { useState } from "react";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import VideoControls from "../VideoControls/VideoControls";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import useAppContext from "../../context/useAppContext";
import "./ControlsComponent.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    minWidth: 200,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function ControlsComponent() {
  const { videos, getVideoDisplay } = useAppContext();

  const [value, setValue] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedVideo(event.target.value);
    handleSelectedVideo();
  };

  const handleSelectedVideo = () => {
    getVideoDisplay(selectedVideo);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div id="Controls" className="controls-container">
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
              <MenuItem key={idx} value={`${video.title}`}>
                {video.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <VideoControls />
    </div>
  );
}
