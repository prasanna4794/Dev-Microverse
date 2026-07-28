export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is display: block?");
    addLog("");

    addLog("Answer:");
    addLog("display: block makes an element start on a new line.");
    addLog("It occupies the available width of its parent element.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

div {
    display: block;
    background: lightblue;
}

</style>

<div>First Div</div>

<div>Second Div</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("Each div starts on a new line.");
    addLog("Each div occupies the available width.");
    addLog("");

    addLog("Program completed.");

}