import { useState, useEffect } from "react";

import axios from "axios";

export default function DisplayComponent() {
	const [videos, setVideos] = useState({});
	console.log(videos);

	useEffect(() => {
		const url = "https://run.mocky.io/v3/93018145-28fc-4c92-a347-0118720d3ccd";
		axios.get(url).then((response) => {
			setVideos(response.data.categories[0].videos);
		});
	}, []);

	return <h1>Hola Dislpay</h1>;
}
