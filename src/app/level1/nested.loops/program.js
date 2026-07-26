export default function runProgram(addLog) {

    addLog("Creating 2D array...");

    const numbers = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    addLog("Starting outer loop...");

    for (let i = 0; i < numbers.length; i++) {

        addLog(`Row ${i + 1}`);

        for (let j = 0; j < numbers[i].length; j++) {

            addLog(`Value : ${numbers[i][j]}`);

        }

    }

    addLog("Nested loop completed.");

}