import useAppContext from "../../context/useAppContext";
import ReactPlayer from "react-player";

export default function DisplayComponent() {
  const { videoDisplay } = useAppContext();

  const { title, sources } = videoDisplay;

  return (
    <>
      {!videoDisplay ? (
        <div>Pick a Video</div>
      ) : (
        <div>
          <h1>{title}</h1>
          <ReactPlayer url={sources[0]} playing="true" />
        </div>
      )}
    </>
  );
}
