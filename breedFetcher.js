const request = require('request');
const searchTerm = process.argv.slice(2, 3);

request("https://api.thecatapi.com/v1/breeds/search?q=" + searchTerm, (error, response, body) => {
  if (error || !response || response.statusCode !== 200) {
    throw error;
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log("Search returned no results.");
  } else {
    console.log(data);
  }
});