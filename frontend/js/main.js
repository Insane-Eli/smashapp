const input = document.getElementById("playerTag");
const output = document.getElementById("output");
const button = document.getElementById("search");


async function getTournamentInfo() {
  const slug = input.value.trim();
  if (!slug) return;

  output.textContent = "loading..";

  const res = await fetch(`http://localhost:3000/api/tournament?slug=${slug}`);
  const data = await res.json();

  output.textContent = JSON.stringify(data, null, 2);
}

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    getTournamentInfo();
  }
});

button.addEventListener("click", getTournamentInfo);