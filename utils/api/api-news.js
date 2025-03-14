import axios from "axios";
import { NEWS_URL } from "../../constants/endpoints";

export async function getAllNews() {
    try {
        const response = await axios.get(NEWS_URL);

        return {
            data: response.data?.data,
            success: response.data?.success
        };
    } catch (error) {
        console.error('Error fetching faqs:', error);
        return {
            data: null,
            success: false
        };
    }
}
