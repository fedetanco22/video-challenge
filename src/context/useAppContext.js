import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const url = "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd";
    axios.get(url).then((response) => {
      const data = response.data.categories[0].videos;
      setVideos(
        data.map((video) => {
          return console.log(video);
        })
      );
    });
  }, []);

  return (
    <AppContext.Provider value={{ videos }}>{children}</AppContext.Provider>
  );
};

export default useAppContext;
