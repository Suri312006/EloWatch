import "../../../../chunks/index.js";
const GET = async () => {
  console.log("the towers have been hit");
  return new Response(JSON.stringify({ "message": "hi" }), { status: 200 });
};
export {
  GET
};
