import { Client } from "shieldbow";
const config = {
  runtime: "nodejs16.x"
};
async function GET() {
  const client = new Client("RGAPI-a06fe8b7-5b34-43e0-8cc4-28c6ca64ccb4");
  let data = "";
  await client.initialize({
    region: "na"
    // defaults to 'na' anyways.
  }).then(async () => {
    const kayn = await client.champions.fetch("Kayn");
    data = kayn.lore;
  });
  let myJson = { Kayn_data: data };
  console.log("in_api", myJson);
  return new Response(JSON.stringify({ Kayn_data: data }), { status: 200 });
}
export {
  GET,
  config
};
