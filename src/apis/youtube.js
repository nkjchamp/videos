import axios from 'axios';

const KEY = 'AIzaSyBV1teQ8GeRZJBmcwOBH-C8KwObE_ekV_4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

