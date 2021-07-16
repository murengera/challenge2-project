import { ALBUM_PHOTO_SUCCESS, ALBUM_PHOTO_FAILLURE } from "./ActionType";
import axios from "axios";

export const GetPhotoAlbum = (id) => async (dispatch) => {
  try {
    const endPoint = `https://challenge3api.herokuapp.com/api/album/${id}`;
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
