export default function runProgram(addLog) {

    addLog("Question:");
    addLog("Why do we use jQuery?");
    addLog("");

    addLog("Answer:");
    addLog("jQuery is used to write less JavaScript code.");
    addLog("It makes web development faster and easier.");
    addLog("");

    addLog("Main Uses:");
    addLog("1. DOM Manipulation");
    addLog("2. Event Handling");
    addLog("3. CSS Changes");
    addLog("4. Animations");
    addLog("5. AJAX");
    addLog("");

    addLog("JavaScript Example:");

    addLog(`document.getElementById("box").style.background = "red";`);

    addLog("");

    addLog("jQuery Example:");

    addLog(`$("#box").css("background", "red");`);

    addLog("");

    addLog("Explanation:");
    addLog("Both examples change the background color.");
    addLog("The jQuery code is shorter and easier to understand.");
    addLog("");

    addLog("Program completed.");

}