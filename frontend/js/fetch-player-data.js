import {formatAndPrint} from './helpers.js';

const fs = require("node:fs");

const API_KEY = fs.readFileSync("backend/apikey.txt", "utf8").trim();

function getPlayerData(playerID) {
  const response = 
  fetch("https://api.start.gg/gql/alpha", {

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

  return jsonify(response);
}
