export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is jQuery?");
    addLog("");

    addLog("Answer:");
    addLog("jQuery is a JavaScript library.");
    addLog("It helps developers write less code.");
    addLog("It is mainly used for DOM manipulation, event handling, CSS changes, animations, and AJAX.");
    addLog("");

    addLog("JavaScript Example:");

    addLog(`document.getElementById("btn").addEventListener("click", function () {

    alert("Hello");

});`);

    addLog("");

    addLog("jQuery Example:");

    addLog(`$("#btn").click(function () {

    alert("Hello");

});`);

    addLog("");

    addLog("Explanation:");
    addLog("Both programs do the same work.");
    addLog("The jQuery code is shorter and easier to read.");
    addLog("");

    addLog("Program completed.");

}