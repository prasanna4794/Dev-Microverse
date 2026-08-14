export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Local State Transaction Ledger?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Local State Transaction Ledger records user actions and state changes as time-stamped delta logs."
    );

    addLog("");

    addLog("What is a Delta?");

    addLog(
        "A delta represents the change between an old value and a new value."
    );

    addLog("");

    addLog("Example:");

    addLog(
        'Old Value: "Prasanna"'
    );

    addLog(
        'New Value: "Prasanna Kumar"'
    );

    addLog(
        'Delta: "Prasanna" → "Prasanna Kumar"'
    );

    addLog("");

    addLog("Transaction Record:");

    addLog(
        'field: "name"'
    );

    addLog(
        'oldValue: "Prasanna"'
    );

    addLog(
        'newValue: "Prasanna Kumar"'
    );

    addLog(
        "timestamp: Date.now()"
    );

    addLog("");

    addLog("Flow:");

    addLog("User Action");

    addLog("      ↓");

    addLog("State Change");

    addLog("      ↓");

    addLog("Create Delta");

    addLog("      ↓");

    addLog("Add Timestamp");

    addLog("      ↓");

    addLog("Transaction Ledger");

    addLog("");

    addLog("Offline Use:");

    addLog(
        "User changes can be stored locally and synchronized with the server when the network becomes available."
    );

    addLog("");

    addLog("Important:");

    addLog(
        "A transaction ledger stores the history of state changes instead of keeping only the final state."
    );

    addLog("");

    addLog("Program completed.");
}