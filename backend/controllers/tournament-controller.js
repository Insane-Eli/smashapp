export async function getTournament(req, res) {
  const { slug } = req.query;

  const data = {
    name: slug || "genesis-x",
    state: "1",
    startAt: 1234567890
  };

  res.json(data);
}
