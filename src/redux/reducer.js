import { ALBUM_PHOTO_SUCCESS, ALBUM_PHOTO_FAILLURE } from "./ActionType";

const initialState = {
  result: "",
  error: null,
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_PHOTO_SUCCESS:
      return {
        ...state,
        result: "success",
        photos: action.payload,
      };
    case ALBUM_PHOTO_FAILLURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
