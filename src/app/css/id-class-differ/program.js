export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between id and class?");
    addLog("");

    addLog("Answer:");
    addLog("The id selector is used for a unique element.");
    addLog("The class selector is used for multiple elements.");
    addLog("");

    addLog("Difference:");
    addLog("- id selector uses #");
    addLog("- class selector uses .");
    addLog("- id should be unique in a page.");
    addLog("- class can be reused on multiple elements.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

#title {
    color: red;
}

.text {
    color: blue;
}

</style>

<h1 id="title">Heading</h1>

<p class="text">One</p>

<p class="text">Two</p>`);

    addLog("");

    addLog("Explanation:");
    addLog("#title applies the style only to the heading.");
    addLog(".text applies the same style to both paragraph elements.");
    addLog("");

    addLog("Program completed.");

}