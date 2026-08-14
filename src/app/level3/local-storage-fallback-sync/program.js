export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is Local Storage Fallback Sync?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "Local Storage Fallback Sync is a backup mechanism that stores data in localStorage when IndexedDB operations fail or reach storage limitations."
    );

    addLog("");

    addLog("Primary Storage:");

    addLog("IndexedDB");

    addLog("");

    addLog("Fallback Storage:");

    addLog("localStorage");

    addLog("");

    addLog("Fallback Example:");

    addLog("Try saving data to IndexedDB");

    addLog("        ↓");

    addLog("IndexedDB Error");

    addLog("        ↓");

    addLog("Save data to localStorage");

    addLog("");

    addLog("Example Code:");

    addLog(
        'localStorage.setItem("draft", JSON.stringify(data));'
    );

    addLog("");

    addLog("Flow:");

    addLog("Form Data");

    addLog("    ↓");

    addLog("Try IndexedDB");

    addLog("    ↓");

    addLog("Success?");

    addLog("  ↙       ↘");

    addLog("Yes       No");

    addLog(" ↓         ↓");

    addLog("Done   localStorage");

    addLog("");

    addLog("Graceful Degradation:");

    addLog(
        "If IndexedDB fails, the application continues using localStorage instead of losing the data."
    );

    addLog("");

    addLog("Important:");

    addLog(
        "localStorage is a fallback mechanism and is generally more limited than IndexedDB."
    );

    addLog("");

    addLog("Program completed.");
}