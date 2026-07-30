export default function runProgram(addLog) {

    addLog("Question:");
    addLog("Difference between JavaScript and jQuery?");
    addLog("");

    addLog("JavaScript:");
    addLog("- Programming Language");
    addLog("- More code");
    addLog("");

    addLog("jQuery:");
    addLog("- JavaScript Library");
    addLog("- Less code");
    addLog("");

    addLog("JavaScript Example:");

    addLog(`document.getElementById("title").style.color = "red";`);

    addLog("");

    addLog("jQuery Example:");

    addLog(`$("#title").css("color", "red");`);

    addLog("");

    addLog("Explanation:");
    addLog("Both examples change the text color.");
    addLog("JavaScript requires more code.");
    addLog("jQuery performs the same task with less code.");
    addLog("");

    addLog("Program completed.");

}