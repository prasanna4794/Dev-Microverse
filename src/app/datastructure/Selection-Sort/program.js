export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Selection Sort?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Selection Sort is a sorting algorithm that finds the smallest element and places it in the correct position."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Selection Sort na remaining data-la smallest value-va find panni, correct position-ku swap pannuvom."
    );

    addLog("");

    addLog("Example:");

    addLog("Array:");
    addLog("[40, 20, 30, 10]");

    addLog("");

    addLog("Step 1:");
    addLog("Smallest value = 10");
    addLog("Swap 10 with 40");

    addLog("");

    addLog("[10, 20, 30, 40]");

    addLog("");

    addLog("Step 2:");
    addLog("Remaining values = [20, 30, 40]");
    addLog("Smallest value = 20");
    addLog("20 is already in the correct position.");

    addLog("");

    addLog("Step 3:");
    addLog("Remaining values = [30, 40]");
    addLog("Smallest value = 30");
    addLog("30 is already in the correct position.");

    addLog("");

    addLog("Sorted Array:");
    addLog("[10, 20, 30, 40]");

    addLog("");

    addLog("How it works:");
    addLog("1. Find the smallest element.");
    addLog("2. Swap it with the first unsorted element.");
    addLog("3. Move to the next position.");
    addLog("4. Repeat until the array is sorted.");

    addLog("");

    addLog("Time Complexity:");
    addLog("Best Case → O(n²)");
    addLog("Average Case → O(n²)");
    addLog("Worst Case → O(n²)");

    addLog("");

    addLog("Space Complexity:");
    addLog("O(1)");

    addLog("");

    addLog("Important Point:");
    addLog(
        "Selection Sort performs fewer swaps compared to Bubble Sort."
    );

    addLog("");

    addLog("Real World Example:");
    addLog(
        "Selection Sort can be used for small datasets where simple sorting logic is required."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Selection Sort is a sorting algorithm that repeatedly finds the smallest element from the unsorted part and places it in the correct position."
    );

    addLog("");

    addLog("Program completed.");

}