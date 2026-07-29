export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are pseudo-elements?");
    addLog("");

    addLog("Answer:");
    addLog("Pseudo-elements are used to style a specific part of an HTML element.");
    addLog("");

    addLog("Common Pseudo-elements:");
    addLog("::first-letter");
    addLog("::first-line");
    addLog("::before");
    addLog("::after");
    addLog("");

    addLog("Example:");

    addLog(`<style>

p::first-letter {
    font-size: 30px;
    color: red;
}

</style>

<p>Hello World</p>`);

    addLog("");

    addLog("Explanation:");
    addLog("The first letter of the paragraph becomes larger and red.");
    addLog("");

    addLog("Program completed.");

}