export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are List Comprehensions in Python?");
    addLog("");

    addLog("Answer:");
    addLog("List Comprehensions provide a concise way to create new lists using a single line of code.");

    addLog("");

    const numbers = [1, 2, 3, 4];

    const result = numbers.map(num => num * 2);

    addLog("Example:");
    addLog(result.join(", "));

    addLog("");

    addLog("Program completed.");

}