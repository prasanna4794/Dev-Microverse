export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Conflict Resolution Engine?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Conflict Resolution Engine handles conflicts when the same data is modified in different places."
    );

    addLog("");

    addLog("Example Conflict:");

    addLog(
        "Local: name = Kumar"
    );

    addLog(
        "Server: name = Prasanna"
    );

    addLog("");

    addLog("Strategy 1:");

    addLog(
        "Last-Write-Wins"
    );

    addLog(
        "The latest update becomes the final value."
    );

    addLog("");

    addLog("Strategy 2:");

    addLog(
        "Merge"
    );

    addLog(
        "Compatible changes are combined into one final state."
    );

    addLog("");

    addLog("Last-Write-Wins Example:");

    addLog(
        "Local updatedAt = 100"
    );

    addLog(
        "Server updatedAt = 200"
    );

    addLog(
        "Server version wins."
    );

    addLog("");

    addLog("Merge Example:");

    addLog(
        "Local: name + age"
    );

    addLog(
        "Server: name + city"
    );

    addLog(
        "Result: name + age + city"
    );

    addLog("");

    addLog("Flow:");

    addLog("Local Data");

    addLog("      ↓");

    addLog("Server Data");

    addLog("      ↓");

    addLog("Detect Conflict");

    addLog("      ↓");

    addLog("Choose Strategy");

    addLog("      ↓");

    addLog("LWW / Merge");

    addLog("      ↓");

    addLog("Final State");

    addLog("");

    addLog("Important:");

    addLog(
        "Last-Write-Wins selects the latest version, while Merge combines compatible changes."
    );

    addLog("");

    addLog("Program completed.");
}