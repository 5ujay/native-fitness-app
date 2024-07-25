import axios from "axios";
import { rapid_API_Key } from "../constants/BodyParts";

const baseURL = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "x-rapidapi-key": rapid_API_Key,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error in apiCall : ", error.message);
    throw error;
  }
};

export const fetchExerciseBodyPart = async (bodypart) => {
  try {
    let data = await apiCall(`${baseURL}/exercises/bodyPart/${bodypart}`);
    return data;
  } catch (error) {
    console.error("Error fetching exercises: ", error);
    throw error;
  }
};
