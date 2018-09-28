const BASE_MOVIE_API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f193fbe6c901391c31cd38bfe1bc1269';

/*
 * Builds the actual API endpoint path.
 */
const buildApiUrl = (path) => {
    return `${BASE_MOVIE_API_URL}${path}?api_key=${API_KEY}&language=en-US`;
};

/*
 * We are using fetch to get the data from the API endpoint.
 * Funny thing here, as you may observe that on '.then', we are actually trying to
 * see of the response is OK.
 *
 * This happens because current fetch API only triggers an error when the user has
 * network connections or similar. So, for a 400 status it would have trigger the 'then'.
 * Fortunately, the 'response.ok' property does the job.
 */
export default function apiUtil(path) {
    return new Promise((resolve, reject) => {
        fetch(buildApiUrl(path))
            .then(response => !response.ok ? reject(response.status) : resolve(response.json()))
            .catch(error => reject(error) );
    })
}
