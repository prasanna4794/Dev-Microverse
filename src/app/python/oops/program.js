export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Conditional Statements in Python?");
    addLog("");

    addLog("Answer:");
    addLog("Conditional statements are used to execute different blocks of code based on a condition.");

    addLog("");

    let age = 20;

    if (age >= 18) {
        addLog("Eligible to Vote");
    } else {
        addLog("Not Eligible");
    }

    addLog("");

    addLog("Program completed.");

}