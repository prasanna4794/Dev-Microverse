export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Doubly Linked List?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A Doubly Linked List is a linked list where each node contains data, a reference to the previous node, and a reference to the next node."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Doubly Linked List na each node-ku previous node-um next node-um reference irukkum."
    );

    addLog("");

    addLog("Basic Structure:");

    addLog("null ← 10 ⇄ 20 ⇄ 30 → null");

    addLog("");

    addLog("Each Node Contains:");
    addLog("1. Previous Reference");
    addLog("2. Data");
    addLog("3. Next Reference");

    addLog("");

    addLog("Example:");

    addLog("null ← 10 ⇄ 20 ⇄ 30 → null");

    addLog("");

    addLog("Here:");
    addLog("10 points to 20.");
    addLog("20 points to 10 and 30.");
    addLog("30 points to 20.");

    addLog("");

    addLog("Direction:");

    addLog("Forward:");
    addLog("10 → 20 → 30");

    addLog("");

    addLog("Backward:");
    addLog("30 → 20 → 10");

    addLog("");

    addLog("Advantages:");
    addLog("1. Can move forward and backward.");
    addLog("2. Easier to delete a node when its reference is available.");
    addLog("3. Useful for navigation between previous and next items.");

    addLog("");

    addLog("Disadvantage:");
    addLog(
        "Each node needs extra memory to store the previous reference."
    );

    addLog("");

    addLog("Real World Example:");
    addLog(
        "Browser history can use a Doubly Linked List because we can move to the previous or next page."
    );

    addLog("");

    addLog("Other Examples:");
    addLog("Music Playlist");
    addLog("Browser History");
    addLog("Undo and Redo Operations");

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "A Doubly Linked List is a linked list where each node contains data and references to both the previous and next nodes."
    );

    addLog("");

    addLog("Program completed.");

}