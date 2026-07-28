export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is display: inline?");
    addLog("");

    addLog("Answer:");
    addLog("display: inline keeps elements on the same line.");
    addLog("It occupies only the required width.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

span {
    display: inline;
    background: yellow;
}

</style>

<span>HTML</span>
<span>CSS</span>
<span>JavaScript</span>`);

    addLog("");

    addLog("Explanation:");
    addLog("All span elements appear on the same line.");
    addLog("Each span takes only the width required for its content.");
    addLog("");

    addLog("Program completed.");

}