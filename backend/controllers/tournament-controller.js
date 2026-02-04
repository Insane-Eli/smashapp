import fs from "fs";
const API_KEY = fs.readFileSync(".env", "utf8").trim();

export async function getTournament(req, res) {

  const { slug } = req.query;

  try{
    const response = await fetch("https://api.start.gg/gql/alpha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        query: `
          query {
            tournament(slug: "tournament/${slug}") {
              name
              startAt
              state
            }
          }
        `,
      }),
    });

  if (!response.ok) {
    const text = await response.text();
    console.error("start.gg api error: ", text);
    return res.status(response.status).json({ error: "start.gg api error", details: text });
  }

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
  res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "fetch failed" });
  }
}
