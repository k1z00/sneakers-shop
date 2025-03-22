
const baseURL = 'https://cb7468e351cee5ee.mokky.dev'
import type { Bascked } from "../types/types";



async function fetchAPI(endpoint: string, method: string = 'GET', body: any = null) {
    const headers = {
        'Content-Type': 'application/json',
    };

    const config: RequestInit = {
        method,
        headers,
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseURL}${endpoint}`, config);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text) {
        return null;
    }

    try {
        return JSON.parse(text);
    } catch (error) {
        console.error("Ошибка при парсинге JSON:", error);
        throw error;
    }
}






export default {
    async getPosts() {
        return fetchAPI('/sneakers');
    },
    async getBasket() {
        return fetchAPI('/basket');
    },

    async postBasket(body: Bascked) {
        return fetchAPI('/basket', 'POST', body);
    },

    async deleteBasket(id: number) {
        return fetchAPI(`/basket/${id}`, 'DELETE');
    }
}