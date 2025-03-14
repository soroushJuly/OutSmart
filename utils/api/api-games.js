import axios from "axios";
import { GAMES_LIST_URL } from "../../constants/endpoints";

export async function getAllGames() {
    try {
        const response = await axios.get(GAMES_LIST_URL);

        return {
            data: response.data?.data,
            success: true
        };
    } catch (error) {
        console.error('Error fetching games:', error);
        return {
            data: null,
            success: false
        };
    }
}
