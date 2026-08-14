export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Centralized Pub/Sub Event Bus?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Centralized Pub/Sub Event Bus allows different parts of an application to communicate through events without directly depending on each other."
    );

    addLog("");

    addLog("Pub/Sub means:");

    addLog("Publish + Subscribe");

    addLog("");

    addLog("Publisher:");

    addLog(
        "The component that publishes an event."
    );

    addLog("");

    addLog("Subscriber:");

    addLog(
        "The component that listens for an event."
    );

    addLog("");

    addLog("Example:");

    addLog(
        'eventBus.publish("form-updated", data);'
    );

    addLog("");

    addLog(
        'eventBus.subscribe("form-updated", callback);'
    );

    addLog("");

    addLog("Communication Flow:");

    addLog("Form Component");

    addLog("      ↓");

    addLog('Publish "form-updated"');

    addLog("      ↓");

    addLog("Central Event Bus");

    addLog("      ↓");

    addLog("Sync Engine");

    addLog("");

    addLog("Multiple Subscribers:");

    addLog("Form");

    addLog("   ↓");

    addLog("Event Bus");

    addLog("   ├── Sync Engine");

    addLog("   ├── Notification");

    addLog("   └── Logger");

    addLog("");

    addLog("Important:");

    addLog(
        "A centralized event bus reduces direct dependencies between application components and provides loose coupling."
    );

    addLog("");

    addLog("Program completed.");
}