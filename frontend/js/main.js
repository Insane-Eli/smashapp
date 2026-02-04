const input = document.getElementById("tournamentSlug");
const output = document.getElementById("output");
const button = document.getElementById("searchButton");

button.addEventListener("click", () =>
  {if (input != null) getTournamentInfo();}
);

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter" && input != null) {
    getTournamentInfo();
  }
});

async function getTournamentInfo() {

  console.log("tournament");
  const slug = input.value.trim();
  if (!slug) return;

  output.textContent = "loading..";

  try{
  const res = await fetch(`http://localhost:3000/api/tournament?slug=${input.value.trim()}`);
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
  } catch (err){
    output.textContent = "Error: " + err;
  }
}

// bg scroller (busted)
/*
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector('.bg');
  const muralWidth = 6000;
  const panSpeed = 30; // pixels/sec

  function updateBg () {
  const seconds = Date.now() / 1000;   // makes the bg start relative to the time (so that refreshing doesn't make it chop & i dont have to do some weird position stuff)
  const x = -(seconds * panSpeed) % muralWidth;
  bg.style.backgroundPosition = `${x}px 0`;

  requestAnimationFrame(updateBg);
  }

  updateBg();
});
*/


