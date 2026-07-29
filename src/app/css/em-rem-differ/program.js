export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between px, %, em, and rem?");
    addLog("");

    addLog("Answer:");
    addLog("px - Fixed size.");
    addLog("% - Relative to the parent element.");
    addLog("em - Relative to the parent element's font size.");
    addLog("rem - Relative to the root (html) font size.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.box1 {
    width: 200px;
}

.box2 {
    width: 50%;
}

.text1 {
    font-size: 2em;
}

.text2 {
    font-size: 2rem;
}

</style>`);

    addLog("");

    addLog("Explanation:");
    addLog("px gives a fixed size.");
    addLog("% depends on the parent element.");
    addLog("em depends on the parent's font size.");
    addLog("rem depends on the root html font size.");
    addLog("");

    addLog("Program completed.");

}