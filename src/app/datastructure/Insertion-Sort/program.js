export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Insertion Sort?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Insertion Sort is a sorting algorithm that takes one element at a time and places it in the correct position."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Insertion Sort na one element-ah eduthu, already sorted part-la athoda correct position-la insert pannuvom."
    );

    addLog("");

    addLog("Example:");

    addLog("Array:");
    addLog("[40, 20, 30, 10]");

    addLog("");

    addLog("Step 1:");
    addLog("40 is already sorted.");
    addLog("[40]");

    addLog("");

    addLog("Step 2:");
    addLog("Take 20.");
    addLog("20 < 40 → Insert before 40.");

    addLog("");
    addLog("[20, 40]");

    addLog("");

    addLog("Step 3:");
    addLog("Take 30.");
    addLog("30 < 40 → Move 40.");
    addLog("30 > 20 → Insert after 20.");

    addLog("");
    addLog("[20, 30, 40]");

    addLog("");

    addLog("Step 4:");
    addLog("Take 10.");
    addLog("Move 40, 30 and 20.");
    addLog("Insert 10 at the beginning.");

    addLog("");
    addLog("[10, 20, 30, 40]");

    addLog("");

    addLog("Sorted Array:");
    addLog("[10, 20, 30, 40]");

    addLog("");

    addLog("How it works:");
    addLog("1. Start from the second element.");
    addLog("2. Compare it with the previous elements.");
    addLog("3. Move larger elements to the right.");
    addLog("4. Insert the element in the correct position.");
    addLog("5. Repeat until the array is sorted.");

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
        "Insertion Sort works well when the data is small or almost sorted."
    );

    addLog("");

    addLog("Real World Example:");
    addLog(
        "Sorting playing cards in your hand is similar to Insertion Sort."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Insertion Sort is a sorting algorithm that takes each element and inserts it into its correct position in the sorted part of the array."
    );

    addLog("");

    addLog("Program completed.");

}