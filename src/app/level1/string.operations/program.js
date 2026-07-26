export default function runProgram(addLog) {

    addLog("Creating string...");

    const text = "   Prasanna   ";

    addLog(`Original : "${text}"`);

    addLog("");

    const trimmed = text.trim();

    addLog(`trim() : "${trimmed}"`);

    addLog("");

    const sliced = trimmed.slice(0, 5);

    addLog(`slice(0,5) : "${sliced}"`);

    addLog("");

    const paddedStart = sliced.padStart(10, "*");

    addLog(`padStart() : "${paddedStart}"`);

    addLog("");

    const paddedEnd = sliced.padEnd(10, "*");

    addLog(`padEnd() : "${paddedEnd}"`);

    addLog("");

    addLog("Program completed.");

}