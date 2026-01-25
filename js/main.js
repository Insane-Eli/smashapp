// apparently, to import built in modules into javascript you just need to use the function (most commonly done through a 'const' afaik)
const fs = require("node:fs"); // fs = file system

// readFileSync() reads the entire contents of a file while blocking execution until the operation completes
const API_KEY = fs.readFileSync("apikey.txt", "utf8").trim(); // utf8 format, both ends trimmed for white space

fetch("https://api.start.gg/gql/alpha", { // fetch(string|URL|address, requestInit)
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify({
    query: `
      query {
        tournament(slug: "tournament/genesis-x") {
          name
          startAt
          state
        }
      }
    `,
  }),
})
.then((res) => res.json()) // 
.then((data) => console.log(JSON.stringify(data, null, 2)))
.catch((err) => console.error(err)); // catch and display errors
