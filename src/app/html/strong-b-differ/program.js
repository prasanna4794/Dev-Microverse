export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between strong and b?");
    addLog("");

    addLog("Answer:");
    addLog("<strong> indicates important text.");
    addLog("<b> only makes the text bold.");
    addLog("");

    addLog("Difference:");
    addLog("- <strong> is a semantic tag.");
    addLog("- <b> is a presentational tag.");
    addLog("");

    addLog("Example:");

    addLog(`<strong>Important</strong>

<b>Bold Text</b>`);

    addLog("");

    addLog("Explanation:");
    addLog("<strong> makes the text bold and indicates that it is important.");
    addLog("<b> only changes the appearance of the text to bold.");
    addLog("");

    addLog("Program completed.");

}