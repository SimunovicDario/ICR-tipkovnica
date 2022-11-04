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
#hexGrid {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    text-align: center;
    margin: 0;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    list-style-type: none;
    margin-left: auto;
    margin-right: auto;
}
.hex {
    position: relative;
    visibility: hidden;
    outline: 1px solid transparent;
    /* fix for jagged edges in FF on hover transition */
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
/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width:1201px) {
    /* <- 5-4  hexagons per row */
    #hexGrid {
        padding-bottom: 3.5%
    }
    .hex {
        width: 12.5%;
        /* = 100 / 5 */
    }
    .hex:nth-child(15n+9) {
        /* first hexagon of even rows */
        margin-left: 6.25%;
        /* = width of .hex / 2  to indent even rows */
    }
}
@media (max-width: 1200px) and (min-width:901px) {
    /* <- 4-3  hexagons per row */
    #hexGrid {
        padding-bottom: 5.5%
    }
    .hex {
        width: 25%;
        /* = 100 / 4 */
    }
    .hex:nth-child(7n+5) {
        /* first hexagon of even rows */
        margin-left: 12.5%;
        /* = width of .hex / 2  to indent even rows */
    }
}
@media (max-width: 900px) and (min-width:601px) {
    /* <- 3-2  hexagons per row */
    #hexGrid {
        padding-bottom: 7.4%
    }
    .hex {
        width: 33.333%;
        /* = 100 / 3 */
    }
    .hex:nth-child(5n+4) {
        /* first hexagon of even rows */
        margin-left: 16.666%;
        /* = width of .hex / 2  to indent even rows */
    }
}
@media (max-width: 600px) {
    /* <- 2-1  hexagons per row */
    #hexGrid {
        padding-bottom: 11.2%
    }
    .hex {
        width: 50%;
        /* = 100 / 3 */
    }
    .hex:nth-child(3n+3) {
        /* first hexagon of even rows */
        margin-left: 25%;
        /* = width of .hex / 2  to indent even rows */
    }
}
@media (max-width: 400px) {
    #hexGrid {
        font-size: 13px;
    }
}
</style>
<script lang="ts">
    import { keypress } from './stores.js';

    const letters = ["a", "b", "c", "č", "ć", "d", "đ", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "š", "t", "u", "v", "Space", "Space", "z", "ž", "Backspace"];
    function handleClick(event: any) {
        console.log(event.srcElement.innerText)
        keypress.set([event.srcElement.innerText])
    }
</script>
<div>
    <ul id="hexGrid" style="overflow: hidden">
        {#each letters as letter}
        <li class="hex" >
            <div class="hexIn">
                <a class="hexLink" on:click={handleClick} style="background-color: grey" href="/" id="{letter}">
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