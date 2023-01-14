<script lang="ts">
	import { keypress } from './stores.js';
	import { chosenKeyboard } from './stores.js';
	// const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Space", "Space", "Space", "z", "Backspace"];
	// const letters = [["q","f","u","m","c","k","z"],["Space","o","t","h","Space"],["b","s","r","e","a","w","x"],["Space","i","n","d","Space"],["j","p","v","g","l","y", "Ret"]]
	const letters = [
		['Z', 'W', 'L', 'D', 'M', 'B', 'V'],
		['Space', 'I', 'N', 'A', 'Space'],
		['K', 'Y', 'S', 'E', 'R', 'U', 'Q'],
		['Space', 'T', 'H', 'O', 'Space'],
		['X', 'P', 'F', 'C', 'G', 'J', 'Ret']
	];
	function handleClick(event: any) {
		console.log(event.srcElement.innerText);
		keypress.set([event.srcElement.innerText]);
	}
	let keyboard = '';
	chosenKeyboard.subscribe((val) => {
		console.log(val);
		keyboard = val;
	});
</script>

<div
	style="display: {keyboard == 'mac'
		? 'flex'
		: 'none'}; font-size: 4em; flex: 1; flex-direction: column; align-items: stretch; margin-top: 1vh; margin-left:1%; margin-right:1%; margin-bottom: 1%;"
>
	{#each letters as row}
		<div style="display: flex; flex-wrap: wrap; align-items: stretch; flex: 1">
			{#each row as letter}
				<div
					style="border: 1px solid black; flex: {letter == 'Space'
						? 2
						: 1} 1; align-items: center;justify-content: center;display: flex;"
					on:click={handleClick}
				>
					{letter}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
</style>
