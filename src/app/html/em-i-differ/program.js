export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between em and i?");
    addLog("");

    addLog("Answer:");
    addLog("<em> emphasizes important text.");
    addLog("<i> displays text in italic style.");
    addLog("");

    addLog("Difference:");
    addLog("- <em> is a semantic tag.");
    addLog("- <i> is a presentational tag.");
    addLog("");

    addLog("Example:");

    addLog(`<em>Important Text</em>

<i>Italic Text</i>`);

    addLog("");

    addLog("Explanation:");
    addLog("<em> gives meaning and emphasis to the text.");
    addLog("<i> only changes the appearance to italic.");
    addLog("");

    addLog("Program completed.");

}