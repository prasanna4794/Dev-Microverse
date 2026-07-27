export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between div and span?");
    addLog("");

    addLog("Answer:");
    addLog("<div> is a block-level element.");
    addLog("<span> is an inline element.");
    addLog("");

    addLog("Difference:");
    addLog("- <div> starts on a new line.");
    addLog("- <span> stays in the same line.");
    addLog("");

    addLog("Example:");

    addLog(`<div>This is Div 1</div>
<div>This is Div 2</div>

<span>This is Span 1</span>
<span>This is Span 2</span>`);

    addLog("");

    addLog("Explanation:");
    addLog("<div> occupies the full available width and starts on a new line.");
    addLog("<span> only takes the required width and stays inline with other content.");
    addLog("");

    addLog("Program completed.");

}