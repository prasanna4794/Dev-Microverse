export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Binary Search Tree?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A Binary Search Tree is a binary tree where smaller values are stored on the left and larger values are stored on the right."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "BST na small value left side-layum, large value right side-layum store pannuvom."
    );

    addLog("");

    addLog("BST Rule:");

    addLog("Left value < Root");
    addLog("Right value > Root");

    addLog("");

    addLog("Example:");

    addLog("        50");
    addLog("       /  \\");
    addLog("      30   70");
    addLog("     / \\   / \\");
    addLog("    20 40 60 80");

    addLog("");

    addLog("Here:");
    addLog("30 is smaller than 50, so it is on the left.");
    addLog("70 is larger than 50, so it is on the right.");
    addLog("20 is smaller than 30.");
    addLog("40 is larger than 30.");

    addLog("");

    addLog("Searching Example:");

    addLog("Search for 60");

    addLog("");

    addLog("60 > 50 → Go Right");
    addLog("60 < 70 → Go Left");
    addLog("60 found.");

    addLog("");

    addLog("Main Operations:");
    addLog("1. Search");
    addLog("2. Insert");
    addLog("3. Delete");

    addLog("");

    addLog("Important Point:");
    addLog(
        "A balanced BST can provide efficient searching, insertion, and deletion."
    );

    addLog("");

    addLog("Real World Example:");
    addLog(
        "BST can be used when data needs to be stored in an ordered structure and searched efficiently."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "A Binary Search Tree is a binary tree where values smaller than the root are stored on the left and larger values are stored on the right."
    );

    addLog("");

    addLog("Program completed.");

}