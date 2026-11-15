require('dotenv').config()

async function fetchAPI(title) {
    const apiKey = process.env.API_KEY
    try {
        console.log(title);
        
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title})`)
        const data = await response.json()
        return data
    } catch (e) {
        console.error(e)
        return null
    }
}

module.exports = fetchAPI;
