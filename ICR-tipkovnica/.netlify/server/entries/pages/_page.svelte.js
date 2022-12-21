import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const chosenKeyboard = writable("");
const HexKeyboard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".svelte-1t5jhs4.svelte-1t5jhs4{margin:0;padding:0}.button.svelte-1t5jhs4.svelte-1t5jhs4{height:100%;width:100%;display:flex;align-items:center}#hexGrid{display:flex;flex-wrap:wrap;width:75%;text-align:center;margin:0;overflow:hidden;font-family:'Raleway', sans-serif;font-size:15px;list-style-type:none;margin-left:auto;margin-right:auto;padding-bottom:3.5%\r\n}.hex.svelte-1t5jhs4.svelte-1t5jhs4{position:relative;visibility:hidden;outline:1px solid transparent;width:14.285%}.hex.svelte-1t5jhs4.svelte-1t5jhs4:nth-child(13n+8){margin-left:7.1425%}.hex.svelte-1t5jhs4.svelte-1t5jhs4::after{content:'';display:block;padding-bottom:86.602%}.hexIn.svelte-1t5jhs4.svelte-1t5jhs4{position:absolute;width:98%;padding-bottom:112.851%;margin:0 1%;overflow:hidden;visibility:hidden;outline:1px solid transparent;-webkit-transform:rotate3d(0, 0, 1, -60deg) skewY(30deg);-ms-transform:rotate3d(0, 0, 1, -60deg) skewY(30deg);transform:rotate3d(0, 0, 1, -60deg) skewY(30deg)}.hexIn.svelte-1t5jhs4 .svelte-1t5jhs4{position:absolute;visibility:visible;outline:1px solid transparent}.hexLink.svelte-1t5jhs4.svelte-1t5jhs4{display:block;width:100%;height:100%;text-align:center;color:#fff;overflow:hidden;-webkit-transform:skewY(-30deg) rotate3d(0, 0, 1, 60deg);-ms-transform:skewY(-30deg) rotate3d(0, 0, 1, 60deg);transform:skewY(-30deg) rotate3d(0, 0, 1, 60deg)}.hex.svelte-1t5jhs4 h2.svelte-1t5jhs4{margin-left:auto;margin-right:auto;width:100%}",
  map: null
};
const HexKeyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const letters = [
    ".",
    "k",
    "w",
    "m",
    "u",
    "q",
    "'",
    "c",
    "h",
    "t",
    "o",
    "f",
    "z",
    "j",
    "i",
    "e",
    "Space",
    "n",
    "g",
    "b",
    "v",
    "r",
    "s",
    "a",
    "d",
    "Ret",
    ",",
    "x",
    "p",
    "l",
    "y",
    "Shift",
    ""
  ];
  let keyboard = "";
  chosenKeyboard.subscribe((val) => {
    console.log(val);
    keyboard = val;
  });
  $$result.css.add(css$2);
  return `<div style="${"display: " + escape(keyboard == "hex" ? "flex" : "none", true)}" class="${"svelte-1t5jhs4"}"><ul id="${"hexGrid"}" style="${"overflow: hidden"}" class="${"svelte-1t5jhs4"}">${each(letters, (letter) => {
    return `<li class="${"hex svelte-1t5jhs4"}"><div class="${"hexIn svelte-1t5jhs4"}"><a class="${"hexLink svelte-1t5jhs4"}" style="${"background-color: grey"}" href="${"/"}"${add_attribute("id", letter, 0)}><div class="${"button svelte-1t5jhs4"}"><h2 style="${"color:black"}" class="${"svelte-1t5jhs4"}">${escape(letter)}
                        </h2></div>
                </a></div>
        </li>`;
  })}</ul></div>`;
});
const MacKeyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const letters = [
    ["q", "f", "u", "m", "c", "k", "z"],
    ["Space", "o", "t", "h", "Space"],
    ["b", "s", "r", "e", "a", "w", "x"],
    ["Space", "i", "n", "d", "Space"],
    ["j", "p", "v", "g", "l", "y", "Ret"]
  ];
  let keyboard = "";
  chosenKeyboard.subscribe((val) => {
    console.log(val);
    keyboard = val;
  });
  return `<div style="${"display: " + escape(keyboard == "mac" ? "flex" : "none", true) + "; flex: 1; flex-direction: column; align-items: stretch; margin-top: 1vh; margin-left:1%; margin-right:1%; margin-bottom: 1%;"}">${each(letters, (row) => {
    return `<div style="${"display: flex; flex-wrap: wrap; align-items: stretch; flex: 1"}">${each(row, (letter) => {
      return `<div style="${"border: 1px solid black; flex: " + escape(letter == "Space" ? 2 : 1, true) + " 1; align-items: center;justify-content: center;display: flex;"}">${escape(letter)}</div>`;
    })}
    </div>`;
  })}</div>`;
});
const QwertyKeyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const letters = [
    ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p"],
    ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", ""],
    ["", "", "y", "x", "c", "v", "b", "n", "m", "", ""]
  ];
  let keyboard = "";
  chosenKeyboard.subscribe((val) => {
    console.log(val);
    keyboard = val;
  });
  return `<div style="${"display: " + escape(keyboard == "qwerty" ? "flex" : "none", true) + "; flex: 1; flex-direction: column; align-items: stretch; margin-top: 1vh; margin-left:1%; margin-right:1%; margin-bottom: 1%;"}">${each(letters, (row) => {
    return `<div style="${"display: flex; flex-wrap: wrap; align-items: stretch; flex: 1"}">${each(row, (letter) => {
      return `<div style="${"border: " + escape(letter == "" ? "" : "1px solid black", true) + "; flex: " + escape(letter == "" ? 0.5 : letter == "Space" ? 2 : 1, true) + " 1; align-items: center;justify-content: center;display: flex;"}">${escape(letter)}</div>`;
    })}
    </div>`;
  })}</div>`;
});
const Dropdown_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".dropdown.svelte-edwtxx.svelte-edwtxx{position:relative;display:inline-block}.dropdown-content.svelte-edwtxx.svelte-edwtxx{display:block;position:relative;background-color:#f9f9f9;min-width:250px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1}.dropdown-content.svelte-edwtxx div.svelte-edwtxx{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown.svelte-edwtxx:hover .dropdown-content.svelte-edwtxx{display:block}.menu-item.svelte-edwtxx.svelte-edwtxx{padding-right:0!important;display:flex!important}.menu-item-title.svelte-edwtxx.svelte-edwtxx{margin-top:auto;margin-bottom:auto}",
  map: null
};
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOptions = false } = $$props;
  let wordContainer = { width: 50, height: 20, elem: null };
  if ($$props.showOptions === void 0 && $$bindings.showOptions && showOptions !== void 0)
    $$bindings.showOptions(showOptions);
  $$result.css.add(css$1);
  return `<div class="${"dropdown svelte-edwtxx"}">
    ${showOptions ? `<div class="${"dropdown-content svelte-edwtxx"}"><div class="${"svelte-edwtxx"}">Wordbox
            <div class="${"menu-item svelte-edwtxx"}"><span class="${"menu-item-title svelte-edwtxx"}">Height:</span> 
                <button style="${"margin-left: auto;"}"><img src="${"/zoom-in.svg"}" alt="${"Zoom in"}"></button>
                <span style="${"margin-top: auto; margin-bottom: auto; margin-left:5px; margin-right:5px;"}">${escape(wordContainer == null ? void 0 : wordContainer.height)}</span>
                <button style="${"right:0;"}"><img src="${"/zoom-out.svg"}" alt="${"Zoom out"}"></button></div>
            <div class="${"menu-item svelte-edwtxx"}"><span class="${"menu-item-title svelte-edwtxx"}">Width:</span> 
                <button style="${"margin-left: auto; "}"><img src="${"/zoom-in.svg"}" alt="${"Zoom in"}"></button>
                <span style="${"margin-top: auto; margin-bottom: auto; margin-left:5px; margin-right:5px;"}">${escape(wordContainer == null ? void 0 : wordContainer.width)}</span>
                <button style="${"right:0;"}"><img src="${"/zoom-out.svg"}" alt="${"Zoom out"}"></button></div></div>
        <div class="${"svelte-edwtxx"}"><input type="${"radio"}" id="${"mac"}" value="${"mac"}" name="${"keyboard"}" ${""}>
            <label for="${"mac"}">MacKenzie</label>
            <input type="${"radio"}" id="${"hex"}" value="${"hex"}" name="${"keyboard"}" ${""}>
            <label for="${"hex"}">Metropolis</label>
            <input type="${"radio"}" id="${"qwerty"}" value="${"qwerty"}" name="${"keyboard"}" ${""}>
            <label for="${"qwerty"}">QWERTY</label></div>
        ${``}
        <div style="${"display: flex;"}" class="${"svelte-edwtxx"}"><button style="${"margin-left: auto; margin-right: 2px;"}">Save</button>
            <button style="${"margin-right: auto;"}">Reset</button></div></div>` : ``}</div>`;
});
const WordBox_svelte_svelte_type_style_lang = "";
const css = {
  code: ".word-container.svelte-1utsp6n{height:20vh;display:flex;flex-direction:column;width:50%;margin-left:auto;margin-right:auto}.words.svelte-1utsp6n{height:100%;overflow:hidden;box-sizing:border-box;text-align:center}.word{display:inline-block;margin:5px;font-size:2em}.currentWord{background-color:green}.nextWord{background-color:transparent}.correct{color:blue}.incorrect{color:red}",
  map: null
};
const timerLength = 60;
const WordBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showOptions = false;
  let elapsedSeconds = 0;
  let words = [""];
  let userInput = "";
  $$result.css.add(css);
  return `<div id="${"wordContainer"}" class="${"word-container svelte-1utsp6n"}">
        <div class="${"stat-bar"}" style="${"max-height:28px; min-height:28px; border: 1px solid pink; width: 100%; display: flex;"}"><span style="${"width: 100%;"}">${escape(timerLength - elapsedSeconds)}</span>
            ${validate_component(Dropdown, "Dropdown").$$render($$result, { showOptions }, {}, {})}
            <button style="${"margin-left: auto; right:0;"}">Options
            </button>
            
            <button style="${"margin-left: auto; right:0;"}">Restart</button></div>
        <div class="${"word-box-outer"}" style="${"height:100%; overflow: hidden; box-sizing: border-box;"}"><div class="${"words svelte-1utsp6n"}" id="${"words"}" style="${""}">${`${each(words, (word, i) => {
    return `<span class="${"word " + escape(i == 0 ? "currentWord" : "nextWord", true)}"><span>${escape(word)}</span></span>`;
  })}`}</div></div>
        
        
            ${`<input id="${"userInput"}" style="${"width:99%; text-align: center;margin-left: auto;margin-right: auto; margin-bottom:0; margin-top: auto;"}" autocomplete="${"off"}" disabled${add_attribute("value", userInput, 0)}>`}
        </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WordBox, "WordBox").$$render($$result, {}, {}, {})}
${validate_component(HexKeyboard, "HexKeyboard").$$render($$result, {}, {}, {})}
${validate_component(MacKeyboard, "MacKeyboard").$$render($$result, {}, {}, {})}
${validate_component(QwertyKeyboard, "QwertyKeyboard").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
