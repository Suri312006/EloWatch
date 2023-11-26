import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let a = 0;
  let b = 0;
  let total = 0;
  return `<input type="number"${add_attribute("value", a, 0)}> +
<input type="number"${add_attribute("value", b, 0)}> =
${escape(total)} <form method="POST" action="/getRandomNumber" data-svelte-h="svelte-10wayum"><label>add a todo:
		<input name="description" autocomplete="off"></label></form> <button data-svelte-h="svelte-seyvnv">Calculate</button>`;
});
export {
  Page as default
};
