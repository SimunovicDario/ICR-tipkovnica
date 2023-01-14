<style>
* {
    margin: 0;
    padding: 0;
}
.button {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}
:global#hexGrid {
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    text-align: center;
    margin: 0;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    list-style-type: none;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 3.5%
}
.hex {
    position: relative;
    visibility: hidden;
    outline: 1px solid transparent;
    width: 14.285%;

    /* fix for jagged edges in FF on hover transition */
}
.hex:nth-child(13n+8) {
        margin-left: 7.1425%;
}
.hex::after {
    content: '';
    display: block;
    padding-bottom: 86.602%;
    /* =  100 / tan(60) * 1.5 */
}
.hexIn {
    position: absolute;
    width: 98%;
    padding-bottom: 112.851%;
    /* =  width / sin(60) */
    margin: 0 1%;
    overflow: hidden;
    visibility: hidden;
    outline: 1px solid transparent;
    /* fix for jagged edges in FF on hover transition */
    -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
    -ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
    transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
}
.hexIn * {
    position: absolute;
    visibility: visible;
    outline: 1px solid transparent;
    /* fix for jagged edges in FF on hover transition */
}
.hexLink {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
    -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
    transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
}
.hex h2 {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

</style>
<script lang="ts">
    import { keypress } from './stores.js';
    import { chosenKeyboard } from './stores.js';
    // const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Space", "Space", "Space", "z", "Backspace"];
    const letters = [".","K","W","M","U","Q","'","C","H","T","O","F","Z","J","I","E","Space","N","G","B","V","R","S","A","D","Ret",",","x","p","l","y","Shift", ""]
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
<div style="display: {keyboard == 'hex' ? "flex" : "none"};">
    <ul id="hexGrid" style="overflow: hidden">
        {#each letters as letter}
        <li class="hex" >
            <div class="hexIn">
                <a class="hexLink" on:click={handleClick} style="font-size: 2rem; background-color: grey" href="/" id="{letter}">
                    <div class="button">
                        <h2 style="color:black">
                            {letter}
                        </h2>
                    </div>
                </a>
            </div>
        {/each}
    </ul>
</div>