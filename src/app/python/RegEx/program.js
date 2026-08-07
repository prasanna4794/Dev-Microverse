export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Regular Expression (RegEx) in Python?");
    addLog("");

    addLog("Answer:");
    addLog("Regular Expression (RegEx) is used to search, match, and replace text using patterns.");

    addLog("");

    const text = "Welcome to Python";

    const found = text.includes("Python");

    addLog("Example:");
    addLog("Pattern Found : " + found);

    addLog("");

    addLog("Program completed.");

}