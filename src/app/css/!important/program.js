export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is !important?");
    addLog("");

    addLog("Answer:");
    addLog("The !important rule gives a CSS declaration the highest priority.");
    addLog("It overrides normal CSS specificity.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

p {
    color: red !important;
}

.text {
    color: blue;
}

</style>

<p class="text">
    Hello CSS
</p>`);

    addLog("");

    addLog("Explanation:");
    addLog("The paragraph matches both the class selector and the element selector.");
    addLog("Because the element selector uses !important, the text color becomes red.");
    addLog("");

    addLog("Program completed.");

}