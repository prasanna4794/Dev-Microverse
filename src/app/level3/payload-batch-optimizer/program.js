export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Payload Batch Optimizer?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Payload Batch Optimizer combines multiple individual form updates into a single batch payload before sending them to an API."
    );

    addLog("");

    addLog("Individual Updates:");

    addLog("Name → API Request");
    addLog("Email → API Request");
    addLog("Phone → API Request");
    addLog("Address → API Request");

    addLog("");

    addLog("Without Batching:");

    addLog(
        "4 updates = 4 API requests"
    );

    addLog("");

    addLog("With Batching:");

    addLog(
        "4 updates = 1 API request"
    );

    addLog("");

    addLog("Example:");

    addLog(
        'optimizer.add({ field: "name", value: "Prasanna" });'
    );

    addLog(
        'optimizer.add({ field: "email", value: "test@gmail.com" });'
    );

    addLog("");

    addLog("Create Batch:");

    addLog(
        "const batch = optimizer.createBatch();"
    );

    addLog("");

    addLog("Flow:");

    addLog("Form Updates");
    addLog("      ↓");
    addLog("Create Small Payloads");
    addLog("      ↓");
    addLog("Add to Batch Queue");
    addLog("      ↓");
    addLog("Collect Updates");
    addLog("      ↓");
    addLog("Create Batch Payload");
    addLog("      ↓");
    addLog("Send One API Request");
    addLog("      ↓");
    addLog("Clear Queue");

    addLog("");

    addLog("Important:");

    addLog(
        "Batching reduces the number of network requests and improves synchronization efficiency."
    );

    addLog("");

    addLog("Program completed.");
}