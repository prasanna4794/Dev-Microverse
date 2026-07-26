export default function runProgram(addLog) {

    addLog("Creating nested array...");

    const numbers = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];

    addLog("Original Array:");

    addLog(JSON.stringify(numbers));

    addLog("");

    addLog("Flattening array using flat()...");

    const result = numbers.flat();

    addLog("");

    addLog("Flattened Array:");

    addLog(JSON.stringify(result));

    addLog("");

    addLog("Program completed.");

}