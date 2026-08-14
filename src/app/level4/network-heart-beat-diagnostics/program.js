export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Network Heart-Beat & Diagnostics Unit?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "It is a utility that checks network health, tests server connectivity, and retries failed requests using exponential backoff."
    );

    addLog("");

    addLog("Heartbeat:");

    addLog(
        "A heartbeat periodically checks whether the network or server is reachable."
    );

    addLog("");

    addLog("Basic Network Check:");

    addLog(
        "navigator.onLine"
    );

    addLog("");

    addLog("Diagnostics:");

    addLog(
        "Checks online status, server reachability, and response time."
    );

    addLog("");

    addLog("Retry:");

    addLog(
        "A failed request can be attempted again."
    );

    addLog("");

    addLog("Exponential Backoff:");

    addLog(
        "The waiting time increases after each failed retry."
    );

    addLog("");

    addLog("Example:");

    addLog(
        "Retry 1 → Wait 1 second"
    );

    addLog(
        "Retry 2 → Wait 2 seconds"
    );

    addLog(
        "Retry 3 → Wait 4 seconds"
    );

    addLog(
        "Retry 4 → Wait 8 seconds"
    );

    addLog("");

    addLog("Flow:");

    addLog("Network Heartbeat");

    addLog("      ↓");

    addLog("Check Network");

    addLog("      ↓");

    addLog("Ping / Health Check");

    addLog("      ↓");

    addLog("Server Response");

    addLog("      ↓");

    addLog("Success or Retry");

    addLog("");

    addLog("Offline-First Use:");

    addLog(
        "The utility can retry synchronization when the network becomes temporarily unavailable."
    );

    addLog("");

    addLog("Important:");

    addLog(
        "Exponential backoff prevents continuous immediate retries and reduces unnecessary network and server load."
    );

    addLog("");

    addLog("Program completed.");
}