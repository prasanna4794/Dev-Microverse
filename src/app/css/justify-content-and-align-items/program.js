export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between justify-content and align-items?");
    addLog("");

    addLog("Answer:");
    addLog("justify-content aligns items along the main axis.");
    addLog("align-items aligns items along the cross axis.");
    addLog("");

    addLog("When flex-direction: row (default):");
    addLog("- justify-content → Horizontal alignment.");
    addLog("- align-items → Vertical alignment.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>

<div class="container">
    <div>HTML</div>
    <div>CSS</div>
    <div>JavaScript</div>
</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("display: flex enables Flexbox.");
    addLog("justify-content centers the items horizontally.");
    addLog("align-items centers the items vertically.");
    addLog("");

    addLog("Program completed.");

}