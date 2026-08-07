export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Lambda Functions in Python?");
    addLog("");

    addLog("Answer:");
    addLog("Lambda functions are small anonymous functions written in a single line using the lambda keyword.");

    addLog("");

    const add = (a, b) => a + b;

    addLog("Example:");
    addLog("10 + 20 = " + add(10, 20));

    addLog("");

    addLog("Program completed.");

}