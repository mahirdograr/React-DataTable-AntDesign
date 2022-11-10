import axios from "axios";
import { API_URL } from "../env/config";

export const baseManager = {
  getALL: async (url) => {
    let responseData = [];

    await axios.get(API_URL + url).then((res) => {
      responseData = res.data;
    });

    return responseData;
  },
};
