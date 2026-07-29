export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between relative and absolute?");
    addLog("");

    addLog("Answer:");
    addLog("relative moves an element from its original position.");
    addLog("absolute positions an element relative to its nearest positioned parent.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.parent {
    position: relative;
    width: 200px;
    height: 200px;
    border: 2px solid black;
}

.child {
    position: absolute;
    top: 10px;
    left: 10px;
}

</style>

<div class="parent">
    <div class="child">
        Child
    </div>
</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("The parent is the reference because it has position: relative.");
    addLog("The child is positioned 10px from the top and left of the parent.");
    addLog("");

    addLog("Program completed.");

}