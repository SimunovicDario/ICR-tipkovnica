<style>
    .dropbtn {
        height: 100%;
    }
    
    /* The container <div> - needed to position the dropdown content */
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
      display: block;
      position: relative;
      background-color: #f9f9f9;
      min-width: 250px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    /* Links inside the dropdown */
    .dropdown-content div {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    
    .dropdown:hover .dropdown-content {
      display: block;
    }

    .menu-item {
        padding-right: 0!important;
        display: flex!important;
    }

    .menu-item-title {
        margin-top: auto;
        margin-bottom: auto;
    }
    
</style>
<script lang="ts">
    import { onMount } from 'svelte';
    import {chosenKeyboard} from './stores'

    export let showOptions = false;
    let localStorage: Storage;
    let keyboard = "mac";
    let hexGrid: {size: number, elem: HTMLElement | null}= {
        size: 75,
        elem: null
    };
    let wordContainer: {width: any, height: number, elem: HTMLElement | null}= {
            width: 50,
            height: 20,
            elem: null
        };
    onMount(async () => {
        localStorage = window.localStorage;
        hexGrid = {
            size: isNaN(parseInt(localStorage.getItem("hexGrid-size") ?? "")) ? 75 : parseInt(localStorage.getItem("hexGrid-size") ?? ""),
            elem: null
        };
        wordContainer = {
            width: isNaN(parseInt(localStorage.getItem("wordbox-width") ?? "")) ? 50 : parseInt(localStorage.getItem("wordbox-width") ?? ""),
            height: isNaN(parseInt(localStorage.getItem("wordbox-height") ?? "")) ? 20 : parseInt(localStorage.getItem("wordbox-height") ?? ""),
            elem: null
        };
        keyboard = localStorage.getItem("keyboard") ?? "mac";
        chosenKeyboard.set(keyboard)
        chosenKeyboard.subscribe(val =>{
            keyboard = val
            if(keyboard == "hex") {
            hexGrid.elem = document.getElementById("hexGrid");
            hexGrid.elem!.style.width = hexGrid.size + "%";
        }
        })
        if(keyboard == "hex") {
            hexGrid.elem = document.getElementById("hexGrid");
            hexGrid.elem!.style.width = hexGrid.size + "%";
        }

        wordContainer.elem = document.getElementById("wordContainer");
        wordContainer.elem!.style.height = wordContainer.height + "vh";
        wordContainer.elem!.style.width = wordContainer.width + "%";
    });
    function zoomOut(type: string) {
        if(type === "wordbox-height") {
            wordContainer.height--;
            wordContainer.elem!.style.height = wordContainer.height + "vh";
        } else if(type === "wordbox-width") {
            wordContainer.width--;
            wordContainer.elem!.style.width = wordContainer.width + "%";
        }else {
            hexGrid.size--;
            hexGrid.elem!.style.width = hexGrid.size + "%";
        }
    }
    function zoomIn(type: string) {
        if(type === "wordbox-height") {
            wordContainer.height++;
            wordContainer.elem!.style.height = wordContainer.height + "vh";
        } else if(type === "wordbox-width") {
            wordContainer.width++;
            wordContainer.elem!.style.width = wordContainer.width + "%";
        }else {
            hexGrid.size++;
            hexGrid.elem!.style.width = hexGrid.size + "%";
        }
    }
    function save() {
        if(hexGrid.elem) {
            localStorage.setItem("hexGrid-size", hexGrid.size.toString())
        }
        console.log(keyboard)
        localStorage.setItem("keyboard",keyboard)
        localStorage.setItem("wordbox-width", wordContainer.width.toString())
        localStorage.setItem("wordbox-height", wordContainer.height.toString())
    }
    function reset() {
        localStorage.clear()
        if(hexGrid.elem) {
            hexGrid.size = 75;
            hexGrid.elem!.style.width = hexGrid.size + "%";
        }
        wordContainer.height = 20;
        wordContainer.width = 50;
        wordContainer.elem!.style.height = wordContainer.height + "vh";
        wordContainer.elem!.style.width = wordContainer.width + "%";
    }
</script>
<div class="dropdown">
    <!-- <button class="dropbtn">Options</button> -->
    {#if showOptions}
    <div class="dropdown-content">
        <div>Wordbox
            <div class="menu-item">
                <span class="menu-item-title">Height:</span> 
                <button style="margin-left: auto;" on:click={()=>zoomIn("wordbox-height")}>
                    <img src="/zoom-in.svg" alt="Zoom in">
                </button>
                <span style="margin-top: auto; margin-bottom: auto; margin-left:5px; margin-right:5px;">{wordContainer?.height}</span>
                <button style="right:0;" on:click={()=>zoomOut("wordbox-height")}>
                    <img src="/zoom-out.svg" alt="Zoom out">
                </button>
            </div>
            <div class="menu-item">
                <span class="menu-item-title">Width:</span> 
                <button style="margin-left: auto; " on:click={()=>zoomIn("wordbox-width")}>
                    <img src="/zoom-in.svg" alt="Zoom in">
                </button>
                <span style="margin-top: auto; margin-bottom: auto; margin-left:5px; margin-right:5px;">{wordContainer?.width}</span>
                <button style="right:0;" on:click={()=>zoomOut("wordbox-width")}>
                    <img src="/zoom-out.svg" alt="Zoom out">
                </button>
            </div>
        </div>
        <div>
            <input type="radio" id="mac" value="mac" name="keyboard" on:click={()=>chosenKeyboard.set("mac")} checked={keyboard == "mac"}>
            <label for="mac">MacKenzie</label>
            <input type="radio" id="hex" value="hex" name="keyboard" on:click={()=>chosenKeyboard.set("hex")} checked={keyboard == "hex"}>
            <label for="hex">Metropolis</label>
        </div>
        {#if keyboard == "hex"}
        <div>Keyboard
            <div class="menu-item">
                <span class="menu-item-title">Size:</span> 
                <button style="margin-left: auto;" on:click={()=>zoomIn("keyboard")}>
                    <img src="/zoom-in.svg" alt="Zoom in">
                </button>
                <span style="margin-top: auto; margin-bottom: auto; margin-left:5px; margin-right:5px;">{hexGrid?.size}</span>
                <button style="right:0;" on:click={()=>zoomOut("keyboard")}>
                    <img src="/zoom-out.svg" alt="Zoom out">
                </button>
            </div>
        </div>
        {/if}
        <div style="display: flex;">
            <button style="margin-left: auto; margin-right: 2px;" on:click={save}>Save</button>
            <button  style="margin-right: auto;" on:click={reset}>Reset</button>
        </div>
    </div>
    {/if}
</div> 