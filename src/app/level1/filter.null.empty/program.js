export default function runProgram(addLog) {

    addLog("Creating array...");

    const names = [
        "Arun",
        "",
        "Bala",
        null,
        "Kumar",
        undefined,
        "Hari"
    ];

    addLog("Original Array:");

    addLog(JSON.stringify(names));

    addLog("");

    addLog("Filtering valid names...");

    const filteredNames = names.filter((item) => {

        return item !== null &&
            item !== undefined &&
            item !== "";

    });

    addLog("");

    addLog("Filtered Array:");

    addLog(JSON.stringify(filteredNames));

    addLog("");

    addLog("Program completed.");

}