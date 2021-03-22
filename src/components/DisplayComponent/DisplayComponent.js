import useAppContext from "../../context/useAppContext";
import ReactPlayer from "react-player";

export default function DisplayComponent() {
  const { videoDisplay } = useAppContext();

  const { title } = videoDisplay;
  return (
    <>
      <h1>{title}</h1>
      <ReactPlayer url={videoDisplay.sources[0]} />
    </>
  );
}
