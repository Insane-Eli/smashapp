
const fs = require("fs");
const API_KEY = fs.readFileSync("apikey.txt", "utf8").trim();

fetch("https://api.start.gg/gql/alpha", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    query: `
      query {
        tournament(slug: "tournament/genesis-x") {
          name
          startAt
        }
      }
    `
  })
})
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.error(err));
