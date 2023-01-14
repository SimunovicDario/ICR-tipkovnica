<style>
    .word-container {
        /* border: 1px solid black; */
        height: 20vh;
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .words {
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        text-align: center;
    }
    :global.word {
        display: inline-block;
        margin: 5px;
        font-size: 2em; 
    }
    :global.currentWord {
        background-color: green;
        /* color: white; */
    }
    :global.nextWord {
        background-color: transparent;
    }
    :global .correct {
        color: blue;
    }
    :global.incorrect {
        color: red;
    }
    </style>
    <script lang="ts">
        import { onMount } from 'svelte';
        import { wordList } from '../words.js'
	    import Dropdown from './Dropdown.svelte';
        import { keypress } from './stores';
        
        let hexGridWidth = 75;
        let hexGrid: HTMLElement | null;
        let showOptions = false;
        onMount(async () => {
            // generateWordList();
            setTimeout(()=>{
                wordsElem = document.getElementById("words");
                wordsElem?.children[0].classList.add("currentWord")
                wordsElem?.children[0].scrollIntoView()
            }, 50)
            // userInput.focus()
            keypress.subscribe((valueArr: string[])=>{
                const value = valueArr[0];
                if(value==="") return;
                console.log(value)
                if(["Space", "Ret"].includes(value)) {
                    handleKeyPress(value)
                } else {
                    userInput += value;
                    compareInputAndWord(value)
                }
            })
            hexGrid = document.getElementById("hexGrid")
        });
        function zoomOut() {
            hexGridWidth--;
            hexGrid!.style.width = hexGridWidth + "%";
        }
        function zoomIn() {
            hexGridWidth++;
            hexGrid!.style.width = hexGridWidth + "%"
        }
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * max);
        }
        // function generateWordList() {
        //     words = [];
        //     for(let i = 0; i <250; i++) {
        //         words.push(wordList[getRandomInt(wordList.length)])
        //     }
        // }
        function restartAll() {
            window.location.reload();
        }
    
        let start: number|null;
        const timerLength = 120;
        let intervalId: any;
        let isDone = false
        let elapsedSeconds = 0;
        let restart = false;
        function startTimer() {
            start = Date.now();
            intervalId = setInterval(function() {
                var delta = Date.now() - start!; // milliseconds elapsed since start
                elapsedSeconds = Math.floor(delta / 1000)
                if(elapsedSeconds == timerLength) {
                    clearInterval(intervalId)
                    isDone = true;
                    scoreboard();
                }
            }, 100); // update about every second
        }
    
        let userCorrect = 0;
        let userIncorrect = 0;
        let showScoreboard = false;
        function scoreboard() {
            if(userInput.length > 0) {
                userTypedWords.push(userInput)
            }
            userCorrect = 0;
            userIncorrect = 0;
            userTypedWords.forEach((word: String, index: number)=>{
                for(let i = 0; i<word.length; i++) {
                    if(word[i].toUpperCase() === words[index][i].toUpperCase()) 
                        userCorrect++;
                    else
                        userIncorrect++;
                }
            })
            showScoreboard = true;
        }
        const text = "Jane has felt an outcast her whole young life Her courage is tested once again when she arrives at Thornfield Hall where she has been hired by the brooding proud Edward Rochester to care for his ward Adele Jane finds herself drawn to his troubled yet kind spirit She falls in love But there is a terrifying secret inside the gloomy forbidding Thornfield Hall";
        let words: string[] = text.split(" ")
        let wordsElem: HTMLElement | null;
        let currentWordIndex: number = 0;
        let userInput = "";
        let userTypedWords: String[] = [];
        let previousElemChildren: any[] = []
        function handleKeyPress(value: any): any {
            if(value == "Space") {
                if(userInput.length == 0) return;
                goToNextWord();
            }else if(value == "Ret") {
                if(userInput.length === 0){
                    goToPreviousWord();
                    return;
                }
                if(userInput.length > words[currentWordIndex].length) return;
                replaceSpanWithText();
            } 
        }
        function goToNextWord() {
            userTypedWords.push(userInput)
            wordsElem?.children[currentWordIndex].classList.toggle("currentWord")
            previousElemChildren.push([...wordsElem!.children[currentWordIndex].childNodes]);
            wordsElem!.children[currentWordIndex].innerHTML = words[currentWordIndex]
            if(userInput !== words[currentWordIndex].toUpperCase()) {
                wordsElem?.children[currentWordIndex].classList.add("incorrect");
                wordsElem?.children[currentWordIndex].classList.remove("correct");
            } else {
                wordsElem?.children[currentWordIndex].classList.add("correct")
                wordsElem?.children[currentWordIndex].classList.remove("incorrect");
            }
            userInput = "";
            currentWordIndex++;
            wordsElem?.children[currentWordIndex].classList.toggle("nextWord")
            wordsElem?.children[currentWordIndex].classList.add("currentWord")
            
            wordsElem?.children[currentWordIndex].scrollIntoView({behavior: 'smooth'})
    
        }
        function goToPreviousWord() {
            if(userTypedWords.length === 0) return;
    
            userInput = userTypedWords.pop()?.toString() ?? "";
            wordsElem?.children[currentWordIndex].classList.toggle("currentWord")
            wordsElem?.children[currentWordIndex].classList.add("nextWord")
            currentWordIndex--;
            wordsElem?.children[currentWordIndex].classList.remove("correct")
            wordsElem?.children[currentWordIndex].classList.remove("incorrect")
            wordsElem!.children[currentWordIndex].innerHTML = "";
            previousElemChildren.pop().forEach((elem:any)=>{
                wordsElem?.children[currentWordIndex].append(elem)    
            })
            wordsElem?.children[currentWordIndex].classList.add("currentWord")
            wordsElem?.children[currentWordIndex].scrollIntoView({behavior: 'smooth'})
        }
        function compareInputAndWord(value: string) {
            if(!start) {
                startTimer()
            }
            const currentWord = words[currentWordIndex];
            if((userInput.length) > currentWord.length) return;
            const charIndex = userInput.length-1;
            const lastTypedChar = value;
            let currentWordElem = wordsElem!.children[currentWordIndex];
            const span = document.createElement("span");
            span.innerText = currentWord[charIndex];
            if(lastTypedChar === currentWord[charIndex].toUpperCase()) {
                span.classList.add("correct")
                span.classList.remove("incorrect")
            } else {
                span.classList.add("incorrect")
                span.classList.remove("correct")
            }
            currentWordElem.children[currentWordElem.children.length-1].innerHTML = currentWordElem.children[currentWordElem.children.length-1].innerHTML.slice(1)
            currentWordElem.insertBefore(span, currentWordElem.children[currentWordElem.children.length-1])
        }
        function replaceSpanWithText() {
            const charIndex = userInput.length - 1;
            userInput = userInput.slice(0, userInput.length-1)
            let currentWordElem = wordsElem!.children[currentWordIndex];
            currentWordElem.children[currentWordElem.children.length-1].innerHTML = words[currentWordIndex][charIndex] + currentWordElem.children[currentWordElem.children.length-1].innerHTML
            currentWordElem.removeChild(currentWordElem.children[currentWordElem.children.length-2])
        }
        function options() {

        }
    </script>
    <div id="wordContainer" class="word-container" > 
        <!-- style="resize: vertical; overflow: hidden;"> -->
        <div class="stat-bar" style="max-height:28px; min-height:28px; border: 1px solid pink; width: 100%; display: flex;">
            <span style="width: 100%;">{timerLength-elapsedSeconds}</span>
            <Dropdown showOptions={showOptions}></Dropdown>
            <button style="margin-left: auto; right:0;" on:click={()=>showOptions = !showOptions}>
                Options
            </button>
            <!-- <button style="margin-left: auto; right:0;" on:click={zoomIn}>
                <img src="/zoom-in.svg" alt="Zoom in">
            </button>
            <button style="margin-left: auto; right:0;" on:click={zoomOut}>
                <img src="/zoom-out.svg" alt="Zoom out">
            </button> -->
            <button style="margin-left: auto; right:0;" on:click={restartAll}>Restart</button>
        </div>
        <div class="word-box-outer" style="height:100%; overflow: hidden; box-sizing: border-box;">
            <div class="words" id="words" style="">
                {#if !showScoreboard}
                    {#key restart}
                        {#each words as word,i}
                        <span class="word {i== 0 ? 'currentWord': 'nextWord'}"><span>{word}</span></span>
                        {/each}
                    {/key}
                {:else}
                    <div>Number of letters written: {userCorrect+userIncorrect}</div>
                    <div>Number of letters written correctly: {userCorrect}</div>
                    <div>Number of letters written incorrectly: {userIncorrect}</div>
                    <div>WPM: {Math.round(((userCorrect+userIncorrect)/5)*(60/timerLength))}</div>
                    <div>Corrected WPM: {Math.round((userCorrect/5)*(60/timerLength))}</div>
                {/if}
            </div>
        </div>
        <!-- <div style="margin-bottom: 0px;margin-top: auto; background-color: white; min-height: 22px;"> -->
        <!-- <div class="input-bar"  style="height:20%; border: 1px solid pink"> -->
            {#if !isDone}
                <input bind:value={userInput} id="userInput" style="width:99%; text-align: center;margin-left: auto;margin-right: auto; margin-bottom:0; margin-top: auto;"
                autocomplete="off" disabled>
            {:else}
                <span>DONE</span>
            {/if}
        <!-- </div> -->
    </div>