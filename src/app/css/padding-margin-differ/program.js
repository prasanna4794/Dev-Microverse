export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between Margin and Padding?");
    addLog("");

    addLog("Answer:");
    addLog("Margin creates space outside the element.");
    addLog("Padding creates space inside the element.");
    addLog("");

    addLog("Difference:");
    addLog("- Margin: Outside the border.");
    addLog("- Padding: Inside the border.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.box {

    margin: 20px;

    padding: 20px;

}

</style>

<div class="box">
    Hello
</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("Margin creates space between this box and other elements.");
    addLog("Padding creates space between the content and the border.");
    addLog("");

    addLog("Program completed.");

}