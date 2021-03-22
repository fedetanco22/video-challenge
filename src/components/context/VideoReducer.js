import { GET_VIDEOS, GET_VIDEODISPLAY } from "./types";

export default function (state, action) {
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
  }
}
