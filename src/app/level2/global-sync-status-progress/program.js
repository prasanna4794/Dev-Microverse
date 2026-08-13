export default function runProgram(addLog) {

    addLog("Question:");
    addLog(
        "What is a Global Sync Status Progress Bar / Notification Ribbon?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Global Sync Status Progress Bar is a reusable UI component that shows the current synchronization progress and status of an application."
    );

    addLog("");

    addLog("Sync Status:");

    addLog(
        'const [status, setStatus] = useState("Not Synced");'
    );

    addLog("");

    addLog("Progress State:");

    addLog(
        "const [progress, setProgress] = useState(0);"
    );

    addLog("");

    addLog("Progress Bar:");

    addLog(
        'style={{ width: `${progress}%` }}'
    );

    addLog("");

    addLog("Sync Flow:");

    addLog("User clicks Sync");
    addLog("       ↓");
    addLog("Sync starts");
    addLog("       ↓");
    addLog("Status = Syncing");
    addLog("       ↓");
    addLog("Progress updates");
    addLog("       ↓");
    addLog("20% → 40% → 60% → 80% → 100%");
    addLog("       ↓");
    addLog("Status = Synced Successfully");

    addLog("");

    addLog("Notification Examples:");

    addLog("🔄 Syncing data...");
    addLog("✅ Data synced successfully");
    addLog("❌ Sync failed");
    addLog("⚠ Waiting for connection");

    addLog("");

    addLog("Important:");

    addLog(
        "The global sync status gives users a clear view of the application's synchronization state."
    );

    addLog("");

    addLog("Program completed.");
}