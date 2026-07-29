export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between Flexbox and Grid?");
    addLog("");

    addLog("Answer:");
    addLog("Flexbox is a one-dimensional layout system.");
    addLog("Grid is a two-dimensional layout system.");
    addLog("");

    addLog("Difference:");
    addLog("- Flexbox: Arranges items in a row or a column.");
    addLog("- Grid: Arranges items in rows and columns.");
    addLog("");

    addLog("Flexbox Example:");

    addLog(`<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>

<style>
.container {
    display: flex;
}
</style>`);

    addLog("");

    addLog("Grid Example:");

    addLog(`<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>

<style>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>`);

    addLog("");

    addLog("Explanation:");
    addLog("Use Flexbox for simple one-dimensional layouts.");
    addLog("Use Grid for complex two-dimensional layouts.");
    addLog("");

    addLog("Program completed.");

}