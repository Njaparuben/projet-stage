

interface Params {
    path: string,
    filter?: any
}

export default async function fetchData(params: Params) {
    const { path } = params

    try {
        const endpoint = `${process.env.BASE_URL_API}/${path}`
        const response = await fetch(endpoint)
        const text = await response.text();
        try {
            return JSON.parse(text)
        } catch (error) {
            return text
        }
    } catch (error) {
        console.error(error)
    }
}

