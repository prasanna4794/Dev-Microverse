export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Exception Handling in Python?");
    addLog("");

    addLog("Answer:");
    addLog("Exception Handling is used to handle runtime errors and prevent the program from crashing.");

    addLog("");

    addLog("Example:");

    try {

        let result = 10 / 0;

        addLog(result);

    } catch (error) {

        addLog("Cannot divide by zero");

    }

    addLog("");

    addLog("Program completed.");

}