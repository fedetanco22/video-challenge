import { useState, useEffect } from "react";
import useAppContext from "../../context/useAppContext";

export default function DisplayComponent() {
	const { getVideos } = useAppContext();

	useEffect(() => {
		getVideos();
	}, []);

	return <h1>Hola Dislpay</h1>;
}
