export default function runProgram(addLog) {

    addLog("Calculating current timestamp...");

    const currentTimestamp = Date.now();

    addLog("");

    addLog(
        `Unix Timestamp : ${currentTimestamp}`
    );

    addLog("");

    addLog(
        `Data Type : ${typeof currentTimestamp}`
    );

    addLog("");

    const seconds =
        Math.floor(currentTimestamp / 1000);

    addLog(
        `Unix Seconds : ${seconds}`
    );

    addLog("");

    addLog("Program completed.");

}