// apparently, to import built-in modules into javascript, you just need to use the function (most commonly done through a 'const' afaik)
const fs = require("node:fs"); // fs = file system

// readFileSync() reads the entire contents of a file while blocking execution until the operation completes
const API_KEY = fs.readFileSync("backend/apikey.txt", "utf8").trim(); // utf8 format, both ends trimmed for white space

fetch("https://api.start.gg/gql/alpha", { // fetch(string|URL|address, requestInit)
// method, headers, and body are all REQUIRED in requestInit, however there are many more fields available

  // usually either POST or GET, for graphQL in particular we (unintuitively) usually have to POST our query in order to retrieve the data we want, rather than the typical GET method
  method: "POST",

  // headers = heads up to the server with stuff regarding our request
  headers: {
    "Content-Type": "application/json", // tells the server that we're sending in a json request
    Authorization: `Bearer ${API_KEY}`, // we also gotta throw our key in there obviously
  },

  // turns our query into a json and then boom
  body: JSON.stringify({
    query: `
      query {
        tournament(slug: "split-neutral-36") {
          name
          startAt
          state
        }
      }
    `,
  }),
})

// try
.then((res) => res.json()) // turns the (unreadable) http response object into a parseable js object
.then((data) => console.log(JSON.stringify(data, null, 2))) // makes the object into a readable json file and prints to console
// catch 
.catch((err) => console.error(err)); // catch and display errors to console
