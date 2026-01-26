const input = document.getElementById("playerTag");

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    getPlayer();
  }
});

function getPlayer(){
  const output = document.getElementById("output");
  const input = document.getElementById("playerTag").value;
  output.textContent = input;
}