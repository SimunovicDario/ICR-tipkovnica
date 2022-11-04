import { c as create_ssr_component, v as validate_component, d as each, e as escape, f as add_attribute } from './index-6ee52f73.js';

const css$1 = {
  code: ".svelte-1gvdx7f.svelte-1gvdx7f{margin:0;padding:0}.button.svelte-1gvdx7f.svelte-1gvdx7f{height:100%;width:100%;display:flex;align-items:center}#hexGrid.svelte-1gvdx7f.svelte-1gvdx7f{display:flex;flex-wrap:wrap;width:85%;text-align:center;margin:0;overflow:hidden;font-family:'Raleway', sans-serif;font-size:15px;list-style-type:none;margin-left:auto;margin-right:auto}.hex.svelte-1gvdx7f.svelte-1gvdx7f{position:relative;visibility:hidden;outline:1px solid transparent}.hex.svelte-1gvdx7f.svelte-1gvdx7f::after{content:'';display:block;padding-bottom:86.602%}.hexIn.svelte-1gvdx7f.svelte-1gvdx7f{position:absolute;width:98%;padding-bottom:112.851%;margin:0 1%;overflow:hidden;visibility:hidden;outline:1px solid transparent;-webkit-transform:rotate3d(0, 0, 1, -60deg) skewY(30deg);-ms-transform:rotate3d(0, 0, 1, -60deg) skewY(30deg);transform:rotate3d(0, 0, 1, -60deg) skewY(30deg)}.hexIn.svelte-1gvdx7f .svelte-1gvdx7f{position:absolute;visibility:visible;outline:1px solid transparent}.hexLink.svelte-1gvdx7f.svelte-1gvdx7f{display:block;width:100%;height:100%;text-align:center;color:#fff;overflow:hidden;-webkit-transform:skewY(-30deg) rotate3d(0, 0, 1, 60deg);-ms-transform:skewY(-30deg) rotate3d(0, 0, 1, 60deg);transform:skewY(-30deg) rotate3d(0, 0, 1, 60deg)}.hex.svelte-1gvdx7f h2.svelte-1gvdx7f{margin-left:auto;margin-right:auto;width:100%}@media(min-width:1201px){#hexGrid.svelte-1gvdx7f.svelte-1gvdx7f{padding-bottom:3.5%\r\n    }.hex.svelte-1gvdx7f.svelte-1gvdx7f{width:12.5%}.hex.svelte-1gvdx7f.svelte-1gvdx7f:nth-child(15n+9){margin-left:6.25%}}@media(max-width: 1200px) and (min-width:901px){#hexGrid.svelte-1gvdx7f.svelte-1gvdx7f{padding-bottom:5.5%\r\n    }.hex.svelte-1gvdx7f.svelte-1gvdx7f{width:25%}.hex.svelte-1gvdx7f.svelte-1gvdx7f:nth-child(7n+5){margin-left:12.5%}}@media(max-width: 900px) and (min-width:601px){#hexGrid.svelte-1gvdx7f.svelte-1gvdx7f{padding-bottom:7.4%\r\n    }.hex.svelte-1gvdx7f.svelte-1gvdx7f{width:33.333%}.hex.svelte-1gvdx7f.svelte-1gvdx7f:nth-child(5n+4){margin-left:16.666%}}@media(max-width: 600px){#hexGrid.svelte-1gvdx7f.svelte-1gvdx7f{padding-bottom:11.2%\r\n    }.hex.svelte-1gvdx7f.svelte-1gvdx7f{width:50%}.hex.svelte-1gvdx7f.svelte-1gvdx7f:nth-child(3n+3){margin-left:25%}}@media(max-width: 400px){#hexGrid.svelte-1gvdx7f.svelte-1gvdx7f{font-size:13px}}",
  map: null
};
const Keyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "Space",
    "Space",
    "Space",
    "z",
    "Backspace"
  ];
  $$result.css.add(css$1);
  return `<div class="${"svelte-1gvdx7f"}"><ul id="${"hexGrid"}" style="${"overflow: hidden"}" class="${"svelte-1gvdx7f"}">${each(letters, (letter) => {
    return `<li class="${"hex svelte-1gvdx7f"}"><div class="${"hexIn svelte-1gvdx7f"}"><a class="${"hexLink svelte-1gvdx7f"}" style="${"background-color: grey"}" href="${"/"}"${add_attribute("id", letter, 0)}><div class="${"button svelte-1gvdx7f"}"><h2 style="${"color:black"}" class="${"svelte-1gvdx7f"}">${escape(letter)}
                        </h2></div>
                </a></div>
        </li>`;
  })}</ul></div>`;
});
const css = {
  code: ".word-container.svelte-1utsp6n{height:20vh;display:flex;flex-direction:column;width:50%;margin-left:auto;margin-right:auto}.words.svelte-1utsp6n{height:100%;overflow:hidden;box-sizing:border-box;text-align:center}.word{display:inline-block;margin:5px;font-size:2em}.currentWord{background-color:green}.nextWord{background-color:transparent}.correct{color:blue}.incorrect{color:red}",
  map: null
};
const timerLength = 60;
const WordBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let elapsedSeconds = 0;
  let words = [""];
  let userInput = "";
  $$result.css.add(css);
  return `<div class="${"word-container svelte-1utsp6n"}"><div class="${"stat-bar"}" style="${"height:20%; border: 1px solid pink; width: 100%; display: flex;"}"><span style="${"width: 100%;"}">${escape(timerLength - elapsedSeconds)}</span>
            <button style="${"margin-left: auto; right:0;"}">Restart</button></div>
        <div class="${"word-box-outer"}" style="${"height:60%;"}"><div class="${"words svelte-1utsp6n"}" id="${"words"}">${`${each(words, (word, i) => {
    return `<span class="${"word " + escape(i == 0 ? "currentWord" : "nextWord", true)}"><span>${escape(word)}</span></span>`;
  })}`}</div></div>
        
            ${`<input id="${"userInput"}" style="${"width:99%; text-align: center;"}" autocomplete="${"off"}" disabled${add_attribute("value", userInput, 0)}>`}
        </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WordBox, "WordBox").$$render($$result, {}, {}, {})}
${validate_component(Keyboard, "Keyboard").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6029680f.js.map
