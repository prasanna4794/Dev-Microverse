export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Bubble Sort?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Bubble Sort is a sorting algorithm that compares adjacent elements and swaps them when they are in the wrong order."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Bubble Sort na pakkathula irukkura two elements-ah compare panni, wrong order-la irundha swap pannuvom."
    );

    addLog("");

    addLog("Example:");

    addLog("Array:");
    addLog("[40, 20, 30, 10]");

    addLog("");

    addLog("Step 1:");
    addLog("40 > 20 → Swap");
    addLog("[20, 40, 30, 10]");

    addLog("");

    addLog("Step 2:");
    addLog("40 > 30 → Swap");
    addLog("[20, 30, 40, 10]");

    addLog("");

    addLog("Step 3:");
    addLog("40 > 10 → Swap");
    addLog("[20, 30, 10, 40]");

    addLog("");

    addLog("Next Pass:");

    addLog("30 > 10 → Swap");
    addLog("[20, 10, 30, 40]");

    addLog("");

    addLog("20 > 10 → Swap");
    addLog("[10, 20, 30, 40]");

    addLog("");

    addLog("Sorted Array:");
    addLog("[10, 20, 30, 40]");

    addLog("");

    addLog("How it works:");
    addLog("1. Compare two adjacent elements.");
    addLog("2. Swap them if they are in the wrong order.");
    addLog("3. Continue comparing the elements.");
    addLog("4. Repeat the process until the array is sorted.");

    addLog("");

    addLog("Time Complexity:");
    addLog("Best Case → O(n)");
    addLog("Average Case → O(n²)");
    addLog("Worst Case → O(n²)");

    addLog("");

    addLog("Space Complexity:");
    addLog("O(1)");

    addLog("");

    addLog("Important Point:");
    addLog(
        "Bubble Sort is simple to understand but is not efficient for large datasets."
    );

    addLog("");

    addLog("Real World Example:");
    addLog(
        "Bubble Sort can be used for learning basic sorting concepts and for small datasets."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Bubble Sort is a sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order."
    );

    addLog("");

    addLog("Program completed.");

}