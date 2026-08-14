export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Network Status Monitor?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Network Status Monitor is a reusable utility that checks and monitors whether the application is online or offline."
    );

    addLog("");

    addLog("Browser Status:");

    addLog(
        "navigator.onLine"
    );

    addLog("");

    addLog("Online Event:");

    addLog(
        'window.addEventListener("online", handleOnline);'
    );

    addLog("");

    addLog("Offline Event:");

    addLog(
        'window.addEventListener("offline", handleOffline);'
    );

    addLog("");

    addLog("Mock Ping Loop:");

    addLog(
        "setInterval(checkConnection, 5000);"
    );

    addLog("");

    addLog("Stop Monitoring:");

    addLog(
        "clearInterval(interval);"
    );

    addLog("");

    addLog("Flow:");

    addLog("Start Monitor");
    addLog("      ↓");
    addLog("Check navigator.onLine");
    addLog("      ↓");
    addLog("Online / Offline");
    addLog("      ↓");
    addLog("Mock Ping");
    addLog("      ↓");
    addLog("Update Status");
    addLog("      ↓");
    addLog("Sync / Pause Sync");

    addLog("");

    addLog("Important:");

    addLog(
        "navigator.onLine provides a browser network indication, while periodic connectivity checks can provide additional monitoring."
    );

    addLog("");

    addLog("Program completed.");
}