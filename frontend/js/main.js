import {fetchTournamentInfo} from '../../backend/fetch-tournament-data';

const input = document.getElementById("playerTag");

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    getTournamentInfo();
  }
});

async function getTournamentInfo() {
  const output = document.getElementById("output");
  const input = document.getElementById("playerTag").value;
  const data = await fetchTournamentInfo(input); // wait for API
  output.textContent = JSON.stringify(data, null, 2); // nicely formatted
}

