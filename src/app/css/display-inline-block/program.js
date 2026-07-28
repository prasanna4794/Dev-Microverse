export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is display: inline-block?");
    addLog("");

    addLog("Answer:");
    addLog("display: inline-block keeps elements on the same line.");
    addLog("It also allows width and height to be set.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: lightblue;
}

</style>

<div class="box">One</div>

<div class="box">Two</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("The boxes stay on the same line.");
    addLog("Each box has a width of 100px and a height of 100px.");
    addLog("");

    addLog("Program completed.");

}