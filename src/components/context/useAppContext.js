import { createContext, useContext, useReducer } from "react";
import VideoReducer from "./VideoReducer";
import axios from "axios";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const initialState = {
    videos: [],
    selectedVideo: null,
  };

  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const getVideos = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd"
    );
    dispatch({
      type: "GET_VIDEOS",
      payload: res.data.categories[0].videos,
    });
  };

  const getVideoDisplay = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd"
    );

    dispatch({
      type: "GET_VIDEODISPLAY",
      payload: res.data.categories[0].videos[0],
    });
  };

  return (
    <AppContext.Provider
      value={{
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        getVideos,
        getVideoDisplay,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
