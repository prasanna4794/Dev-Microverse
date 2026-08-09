export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Binary Search?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Binary Search is a searching algorithm that finds an element by repeatedly dividing sorted data into two halves."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Binary Search na sorted data-va middle-la divide panni target value-va fast-ah search pannurathu."
    );

    addLog("");

    addLog("Important Requirement:");
    addLog(
        "Binary Search works on sorted data."
    );

    addLog("");

    addLog("Example:");

    addLog("Array:");
    addLog("[10, 20, 30, 40, 50, 60, 70]");

    addLog("");

    addLog("Search for: 60");

    addLog("");

    addLog("Step 1:");
    addLog("Middle value = 40");
    addLog("60 > 40 → Search the right half.");

    addLog("");

    addLog("Step 2:");
    addLog("Remaining values = [50, 60, 70]");
    addLog("Middle value = 60");

    addLog("");

    addLog("60 = 60 → Element Found");

    addLog("");

    addLog("How it works:");
    addLog("1. Find the middle element.");
    addLog("2. Compare it with the target.");
    addLog("3. If it matches, the element is found.");
    addLog("4. If target is smaller, search the left half.");
    addLog("5. If target is larger, search the right half.");
    addLog("6. Repeat until the element is found or the search space is empty.");

    addLog("");

    addLog("Time Complexity:");
    addLog("Best Case → O(1)");
    addLog("Worst Case → O(log n)");

    addLog("");

    addLog("Important Point:");
    addLog(
        "Binary Search is faster than Linear Search for large sorted data."
    );

    addLog("");

    addLog("Real World Example:");
    addLog(
        "Searching for a word in an alphabetically sorted dictionary is similar to Binary Search."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Binary Search is a searching algorithm that repeatedly divides sorted data into two halves to find the target element efficiently."
    );

    addLog("");

    addLog("Program completed.");

}