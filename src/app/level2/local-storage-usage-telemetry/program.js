export default function runProgram(addLog) {

    addLog("Question:");
    addLog(
        "What is a Local Storage Usage Telemetry Indicator Widget?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Local Storage Usage Telemetry Indicator Widget is a reusable UI component that displays browser storage usage information and status to the user."
    );

    addLog("");

    addLog("Store Data:");

    addLog(
        'localStorage.setItem("draft", JSON.stringify(data));'
    );

    addLog("");

    addLog("Check Storage Usage:");

    addLog(
        "const estimate = await navigator.storage.estimate();"
    );

    addLog("");

    addLog("Usage:");

    addLog(
        "estimate.usage"
    );

    addLog("");

    addLog("Quota:");

    addLog(
        "estimate.quota"
    );

    addLog("");

    addLog("Usage Percentage:");

    addLog(
        "(usage / quota) * 100"
    );

    addLog("");

    addLog("Flow:");

    addLog("Store Data");
    addLog("    ↓");
    addLog("Browser Storage");
    addLog("    ↓");
    addLog("Estimate Usage");
    addLog("    ↓");
    addLog("Calculate Percentage");
    addLog("    ↓");
    addLog("Display Indicator");
    addLog("    ↓");
    addLog("Normal / Warning");

    addLog("");

    addLog("Important:");

    addLog(
        "navigator.storage.estimate() provides an estimate of browser storage usage and quota."
    );

    addLog("");

    addLog("Program completed.");
}