export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is CSS Grid?");
    addLog("");

    addLog("Answer:");
    addLog("CSS Grid is a two-dimensional layout system.");
    addLog("It is used to arrange elements in rows and columns.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>

<div class="container">
    <div>HTML</div>
    <div>CSS</div>
    <div>JavaScript</div>
    <div>React</div>
</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("display: grid enables the Grid layout.");
    addLog("grid-template-columns: 1fr 1fr creates two equal-width columns.");
    addLog("Items are automatically placed into rows and columns.");
    addLog("");

    addLog("Program completed.");

}