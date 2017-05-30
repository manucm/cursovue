import config from './config.js'
//const apiKey = config.apiKey; es igual que escribir lo siguiente
const { apiKey } = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;

export default function getArtists() {
	return fetch(URL)
			.then(res => res.json())
			.then(json => json.topartists.artist)
}