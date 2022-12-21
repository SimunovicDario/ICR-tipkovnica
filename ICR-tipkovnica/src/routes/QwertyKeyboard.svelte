<style>
</style>
<script lang="ts">
    import { keypress } from './stores.js';
    import { chosenKeyboard } from './stores.js';
    const letters = [
        ["q","w","e","r","t","z","u","i","o","p"],
        ["","a","s","d","f","g","h","j","k","l",""],
        ["","","y","x","c","v","b","n","m","","",],
    ]
    function handleClick(event: any) {
        console.log(event.srcElement.innerText)
        keypress.set([event.srcElement.innerText])
    }
    let keyboard = "";
    chosenKeyboard.subscribe(val =>{
        console.log(val)
        keyboard = val
    })
</script>
<div style="display: {keyboard == "qwerty" ? "flex" : "none"}; flex: 1; flex-direction: column; align-items: stretch; margin-top: 1vh; margin-left:1%; margin-right:1%; margin-bottom: 1%;">
    {#each letters as row}
    <div style="display: flex; flex-wrap: wrap; align-items: stretch; flex: 1">
        {#each row as letter}
            <div style="border: {letter == "" ? "" : "1px solid black"}; flex: { letter == "" ? 0.5 : (letter == "Space" ? 2 : 1)} 1; align-items: center;justify-content: center;display: flex;" 
            on:click={handleClick} >{letter}</div>
        {/each}
    </div>
    {/each}
</div>