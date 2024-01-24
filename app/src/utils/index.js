//import axios from 'axios';

export const getData = async (setData) => {
    const res = await axios.get("http://localhost:8080/platforms/allPlatforms");
    setData(res.data);
}

export const getDataCreate = async (body) => {
    await axios.post("http://localhost:8080/platforms/newPlatform", body);
}

export const deleteDataByID = async (body) => {
    await axios.post("http://localhost:8080/platforms/deletePlatform", body);
}