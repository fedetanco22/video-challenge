import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoDisplay, setVideoDisplay] = useState({});

  useEffect(() => {
    const url = "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd";
    axios.get(url).then((response) => {
      const data = response.data.categories[0].videos;
      setVideos(data);
    });
  }, []);

  const getVideoDisplay = (video) => {
    const existingVideo = videos.find((vid) => vid.title === video);

    if (existingVideo) {
      setVideoDisplay(existingVideo);
    } else {
      setVideoDisplay({});
    }
  };

  return (
    <AppContext.Provider value={{ videos, getVideoDisplay, videoDisplay }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
