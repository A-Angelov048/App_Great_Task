const baseUrl = 'http://localhost:3000';

async function requester(method, url, data) {

    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(baseUrl + url, options);

        let result;

        if (response.status !== 204) {
            result = await response.json();
        }

        return result;

    } catch (err) {
        console.log(err.errors);
    }

}

export function get(url) {
    return requester('get', url);
}