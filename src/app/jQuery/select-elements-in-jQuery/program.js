export default function runProgram(addLog) {

    addLog("Question:");
    addLog("How do you select elements in jQuery?");
    addLog("");

    addLog("Answer:");
    addLog("jQuery uses selectors to select HTML elements.");
    addLog("");

    addLog("ID Selector:");
    addLog(`$("#title")`);
    addLog("");

    addLog("Class Selector:");
    addLog(`$(".text")`);
    addLog("");

    addLog("Tag Selector:");
    addLog(`$("p")`);
    addLog("");

    addLog("Explanation:");
    addLog("# selects an element by id.");
    addLog(". selects elements by class.");
    addLog("Tag name selects all matching HTML elements.");
    addLog("");

    addLog("Program completed.");

}