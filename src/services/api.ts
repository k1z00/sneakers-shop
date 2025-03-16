
const baseURL = 'https://cb7468e351cee5ee.mokky.dev'

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

    return response.json();
}

export default {
    async getPosts() {
        return fetchAPI('/sneakers');
    },
}