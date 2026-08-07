export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Sets in Python?");
    addLog("");

    addLog("Answer:");
    addLog("A Set is an unordered collection that stores only unique values.");

    addLog("");

    const numbers = new Set([1, 2, 3, 2, 1]);

    addLog("Example:");
    addLog(Array.from(numbers).join(", "));

    addLog("");

    addLog("Program completed.");

}