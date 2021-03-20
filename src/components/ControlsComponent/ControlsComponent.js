import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

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

export default function ControlsComponent(params) {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    const url = "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd";
    axios.get(url).then((response) => {
      setVideos(response.data.categories[0].videos);
    });
  }, []);

  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formControl} component="fieldset">
        <InputLabel>Select Your Video</InputLabel>
        <Select>
          <MenuItem value={11}>10</MenuItem>
          <MenuItem value={11}>10</MenuItem>
          <MenuItem value={11}>10</MenuItem>
        </Select>
      </FormControl>

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
    </>
  );
}
