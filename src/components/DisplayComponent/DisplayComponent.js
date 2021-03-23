import VideoInformation from "../VideoInformation/VideoInformation";
import useAppContext from "../context/useAppContext";
import ReactPlayer from "react-player";

export default function DisplayComponent() {
  const { selectedVideo, playing, volume } = useAppContext();

  return (
    <>
      {selectedVideo == null ? (
        <></>
      ) : (
        <div>
          <ReactPlayer
            url={selectedVideo.sources[0]}
            playing={playing}
            volume={volume}
          />
          <VideoInformation selectedVideo={selectedVideo} />
        </div>
      )}
    </>
  );
}
