export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Flexbox?");
    addLog("");

    addLog("Answer:");
    addLog("Flexbox is a one-dimensional layout system.");
    addLog("It is used to arrange and align items in a row or column.");
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
    addLog("justify-content centers items horizontally.");
    addLog("align-items centers items vertically.");
    addLog("");

    addLog("Program completed.");

}