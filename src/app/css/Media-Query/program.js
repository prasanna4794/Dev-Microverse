export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Media Query?");
    addLog("");

    addLog("Answer:");
    addLog("A Media Query is used to apply different CSS styles based on the screen size.");
    addLog("It helps create responsive websites for mobile, tablet, and desktop.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

@media (max-width: 768px) {

    body {
        background: lightgray;
    }

}

</style>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the screen width is 768px or smaller,");
    addLog("the background color changes to light gray.");
    addLog("");

    addLog("Program completed.");

}