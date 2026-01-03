import { $ as attr_class, X as stringify } from "./index2.js";
function Footer($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<div${attr_class(`text-center ${stringify(className)}`)}><a href="https://github.com/dennisklappe/CloudMeet" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-400 hover:text-gray-500 transition">Powered by CloudMeet</a></div>`);
}
export {
  Footer as F
};
