import {
  GET_VIDEOS,
  GET_VIDEODISPLAY,
  PLAY_VIDEO,
  PAUSE_VIDEO,
  VOLUME_UP,
  VOLUME_DOWN,
  MUTE,
} from "./types";

export default function VideoReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: payload,
      };
    case GET_VIDEODISPLAY:
      return {
        ...state,
        selectedVideo: payload,
      };
    case PLAY_VIDEO:
      return {
        ...state,
        playing: payload,
      };
    case PAUSE_VIDEO:
      return {
        ...state,
        playing: payload,
      };
    case VOLUME_UP:
      return {
        ...state,
        volume: payload,
      };
    case VOLUME_DOWN:
      return {
        ...state,
        volume: payload,
      };
    case MUTE:
      return {
        ...state,
        volume: payload,
      };
    default:
      return;
  }
}
