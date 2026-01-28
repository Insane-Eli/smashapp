const input = document.getElementById("playerTag");
const output = document.getElementById("output");
const button = document.getElementById("search");

button.addEventListener("click", getTournamentInfo);

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    getTournamentInfo();
  }
});

async function getTournamentInfo() {
  const slug = input.value.trim();
  if (!slug) return;

  output.textContent = "loading..";

  try{
  const res = await fetch(`http://localhost:3000/api/tournament?slug=${slug}`);
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
  } catch (err){
    output.textContent = "Error: " + err;
  }
}




