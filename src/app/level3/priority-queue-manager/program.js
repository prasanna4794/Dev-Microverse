export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Priority Queue Manager?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Priority Queue Manager is a reusable utility that stores tasks according to their priority and processes the highest-priority task first."
    );

    addLog("");

    addLog("Example Priorities:");

    addLog(
        "Payment Transaction → Priority 5"
    );

    addLog(
        "Password Change → Priority 4"
    );

    addLog(
        "Profile Update → Priority 2"
    );

    addLog(
        "Form Draft → Priority 1"
    );

    addLog("");

    addLog("Queue Order:");

    addLog("Payment Transaction");
    addLog("       ↓");
    addLog("Password Change");
    addLog("       ↓");
    addLog("Profile Update");
    addLog("       ↓");
    addLog("Form Draft");

    addLog("");

    addLog("Add Payload:");

    addLog(
        'manager.add({ type: "payment" }, 5);'
    );

    addLog("");

    addLog("Get Next Payload:");

    addLog(
        "manager.next();"
    );

    addLog("");

    addLog("Priority Sorting:");

    addLog(
        "queue.sort((a, b) => b.priority - a.priority);"
    );

    addLog("");

    addLog("Flow:");

    addLog("Create Sync Payload");
    addLog("      ↓");
    addLog("Assign Priority");
    addLog("      ↓");
    addLog("Add to Queue");
    addLog("      ↓");
    addLog("Sort by Priority");
    addLog("      ↓");
    addLog("Process Highest Priority");
    addLog("      ↓");
    addLog("Send to API");
    addLog("      ↓");
    addLog("Process Next Payload");

    addLog("");

    addLog("Important:");

    addLog(
        "A priority queue ensures that critical synchronization tasks are processed before lower-priority tasks."
    );

    addLog("");

    addLog("Program completed.");
}