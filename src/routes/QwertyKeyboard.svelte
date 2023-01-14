<style>
</style>
<script lang="ts">
    import { keypress } from './stores.js';
    import { chosenKeyboard } from './stores.js';
    const letters = [
        ["Q","W","E","R","T","Z","U","I","O","P"],
        ["","A","S","D","F","G","H","J","K","L",""],
        ["","","Y","X","C","V","B","N","M","","Ret",],
        ["","Space",""]
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
<div style="display: {keyboard == "qwerty" ? "flex" : "none"}; flex: 1; flex-direction: column; align-items: stretch; margin-top: 1vh; margin-left:1%; margin-right:1%; margin-bottom: 1%; font-size: 4em;">
    {#each letters as row}
    <div style="display: flex; flex-wrap: wrap; align-items: stretch; flex: 1">
        {#each row as letter}
            <div style="border: {letter == "" ? "" : "1px solid black"}; flex: { letter == "" ? 0.5 : (letter == "Space" ? 2 : 1)} 1; align-items: center;justify-content: center;display: flex;" 
            on:click={handleClick} >{letter}</div>
        {/each}
    </div>
    {/each}
</div>