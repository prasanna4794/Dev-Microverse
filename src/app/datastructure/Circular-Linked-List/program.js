export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Circular Linked List?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A Circular Linked List is a linked list where the last node points back to the first node."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Circular Linked List na last node, first node-ku connect aagum. So list circular-ah continue aagum."
    );

    addLog("");

    addLog("Basic Structure:");

    addLog("10 → 20 → 30");
    addLog("↑         ↓");
    addLog("└─────────┘");

    addLog("");

    addLog("Here:");
    addLog("10 is the first node.");
    addLog("20 is the middle node.");
    addLog("30 is the last node.");
    addLog("30 points back to 10.");

    addLog("");

    addLog("Normal Linked List:");

    addLog("10 → 20 → 30 → null");

    addLog("");

    addLog("Circular Linked List:");

    addLog("10 → 20 → 30 → 10 → 20 → 30...");

    addLog("");

    addLog("Important Point:");
    addLog(
        "A Circular Linked List does not have a null reference at the end."
    );

    addLog("");

    addLog("Advantages:");
    addLog("1. Can continuously traverse the list.");
    addLog("2. Useful for repeated or circular processes.");
    addLog("3. Can move from the last node back to the first node.");

    addLog("");

    addLog("Real World Example:");
    addLog(
        "A music playlist that automatically starts again from the first song after the last song is a simple example of a Circular Linked List."
    );

    addLog("");

    addLog("Other Examples:");
    addLog("Round Robin Scheduling");
    addLog("Circular Playlist");
    addLog("Turn-Based Games");

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "A Circular Linked List is a linked list where the last node points back to the first node, forming a circle."
    );

    addLog("");

    addLog("Program completed.");

}