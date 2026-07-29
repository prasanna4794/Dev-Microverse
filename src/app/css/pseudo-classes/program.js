export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are pseudo-classes?");
    addLog("");

    addLog("Answer:");
    addLog("Pseudo-classes are used to style an element when it is in a specific state.");
    addLog("");

    addLog("Common Pseudo-classes:");
    addLog(":hover");
    addLog(":focus");
    addLog(":active");
    addLog(":visited");
    addLog("");

    addLog("Example:");

    addLog(`<style>

button:hover {
    background: blue;
    color: white;
}

</style>

<button>
    Submit
</button>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the mouse moves over the button, the background changes to blue.");
    addLog("");

    addLog("Program completed.");

}