import { createContext, useContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const initialState = [
		{
			videos: [],
			selectedVideo: null,
		},
	];
	const [state, setstate] = useState(initialState);

	const getVideos = async () => {
		const url = "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd";
		await axios.get(url).then((response) => {
			console.log(response.data.categories[0].videos);
		});
	};

	// const getVideo = (id) => {
	// 	const url = "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd";
	// 	await axios.get(url).then((response) => {
	// 		console.log(response);
	// 	});
	// };

	return (
		<AppContext.Provider value={{ getVideos }}>{children}</AppContext.Provider>
	);
};

export default useAppContext;
