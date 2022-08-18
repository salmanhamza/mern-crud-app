import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error while calling adduser api", error);
  }
};

export const getUser = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("error while calling getUser api", error);
  }
};
