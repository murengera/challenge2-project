import { ALBUM_PHOTO_SUCCESS, ALBUM_PHOTO_FAILLURE } from "./ActionType";
import axios from "axios";

export const GetPhotoAlbum = (id) => async (dispatch) => {
  try {
    const endPoint = `https://jsonplaceholder.typicode.com/album/${id}/photos`;
    const result = await axios.get(endPoint);
    console.log(result);
    dispatch({
      type: ALBUM_PHOTO_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: ALBUM_PHOTO_FAILLURE,
      payload: error,
    });
  }
};
