import { BASE_URL } from "../../constants/urlBase";

export const getFilmsData = async (limit = 30,offset=0) => {
    try {
        const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`)
        return await response.json()
    }
    catch (error){
        console.log("error", error)
    }
}

