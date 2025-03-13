import axios from "axios";
import { FAQ_ALL_URL } from "../../constants/endpoints";

export async function getAllFaqs() {
    try {
        const response = await axios.get(FAQ_ALL_URL);

        return {
            data: response.data,
            success: true
        };
    } catch (error) {
        console.error('Error fetching faqs:', error);
        return {
            data: null,
            success: false
        };
    }
}
