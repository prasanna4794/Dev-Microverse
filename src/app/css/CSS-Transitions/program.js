export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are CSS Transitions?");
    addLog("");

    addLog("Answer:");
    addLog("CSS Transitions make CSS property changes smooth.");
    addLog("They animate changes such as color, width, height, and background.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

button {
    background: blue;
    color: white;
    transition: background 0.3s;
}

button:hover {
    background: red;
}

</style>

<button>Submit</button>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the mouse hovers over the button,");
    addLog("the background color changes smoothly from blue to red.");
    addLog("");

    addLog("Program completed.");

}