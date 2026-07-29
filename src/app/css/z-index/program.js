export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is z-index?");
    addLog("");

    addLog("Answer:");
    addLog("z-index controls the stacking order of overlapping elements.");
    addLog("An element with a higher z-index appears in front.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.box1 {
    position: relative;
    z-index: 10;
}

.box2 {
    position: relative;
    z-index: 5;
}

</style>

<div class="box1">Box 1</div>

<div class="box2">Box 2</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("Box 1 appears in front because its z-index is 10.");
    addLog("Box 2 appears behind because its z-index is 5.");
    addLog("");

    addLog("Program completed.");

}