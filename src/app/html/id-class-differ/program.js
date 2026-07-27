export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between id and class?");
    addLog("");

    addLog("Answer:");
    addLog("id is used for a unique element.");
    addLog("class is used for multiple elements.");
    addLog("");

    addLog("Difference:");
    addLog("- id can be used only once in a page.");
    addLog("- class can be reused on many elements.");
    addLog("");

    addLog("Example:");

    addLog(`<div id="header">Header</div>

<p class="text">One</p>

<p class="text">Two</p>`);

    addLog("");

    addLog("Explanation:");
    addLog("The id 'header' is unique and should appear only once.");
    addLog("The class 'text' is shared by both <p> elements.");
    addLog("");

    addLog("Program completed.");

}