import axios from "axios"

export const markFarmerChoice = async (url: string) => {
    const res = await axios.post(url, {}, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
    return res;
}