export default function runProgram(addLog) {

    function greet(name) {
        addLog("Welcome " + name);
    }

    addLog("Question:");
    addLog("What are Functions in Python?");
    addLog("");

    addLog("Answer:");
    addLog("Functions are reusable blocks of code used to perform a specific task.");

    addLog("");

    addLog("Example:");

    greet("Prasanna");

    addLog("");

    addLog("Program completed.");

}