import { createContext, useContext, useReducer } from "react";
import VideoReducer from "./VideoReducer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const initialState = {
    videos: [],
    selectedVideo: null,
    playing: true,
    volume: 0.5,
  };

  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const getVideos = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd"
    );
    const data = res.data.categories[0].videos.map((video) => {
      return { ...video, id: uuidv4() };
    });

    dispatch({
      type: "GET_VIDEOS",
      payload: data,
    });
  };

  const getSelectedVideo = (id, videos) => {
    const videoSel = videos.find((video) => video.id === id);

    dispatch({
      type: "GET_VIDEODISPLAY",
      payload: videoSel,
    });
  };

  const playVideo = () => {
    if (!state.playing) {
      dispatch({
        type: "PLAY_VIDEO",
        payload: true,
      });
    }
  };
  const pauseVideo = () => {
    if (state.playing) {
      dispatch({
        type: "PAUSE_VIDEO",
        payload: false,
      });
    }
  };
  const volumeUp = () => {
    let volumen = state.volume;
    volumen = parseFloat(volumen + 0.1);
    dispatch({
      type: "VOLUME_UP",
      payload: volumen,
    });
  };

  const volumeDown = () => {
    let volumen = state.volume;
    volumen = parseFloat(volumen - 0.1);
    dispatch({
      type: "VOLUME_DOWN",
      payload: volumen,
    });
  };
  const mute = () => {
    let volumen = state.volume;
    volumen = 0;
    dispatch({
      type: "VOLUME_DOWN",
      payload: volumen,
    });
  };

  return (
    <AppContext.Provider
      value={{
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        getVideos,
        getSelectedVideo,
        playing: state.playing,
        volume: state.volume,
        playVideo,
        pauseVideo,
        volumeUp,
        volumeDown,
        mute,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
