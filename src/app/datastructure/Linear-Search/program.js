export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Linear Search?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Linear Search is a searching method that checks each element one by one until the required element is found."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Linear Search na data-la irukkura elements-ah first-la irundhu one by one check panni target value-va find pannurathu."
    );

    addLog("");

    addLog("Example:");

    addLog("Array:");
    addLog("[10, 20, 30, 40, 50]");

    addLog("");

    addLog("Search for: 40");

    addLog("");

    addLog("Step 1 → Check 10 → Not Found");
    addLog("Step 2 → Check 20 → Not Found");
    addLog("Step 3 → Check 30 → Not Found");
    addLog("Step 4 → Check 40 → Found");

    addLog("");

    addLog("How it works:");
    addLog("1. Start from the first element.");
    addLog("2. Compare the element with the target.");
    addLog("3. If it matches, return the element.");
    addLog("4. Otherwise, move to the next element.");
    addLog("5. Continue until the element is found or the array ends.");

    addLog("");

    addLog("Time Complexity:");
    addLog("Best Case → O(1)");
    addLog("Worst Case → O(n)");

    addLog("");

    addLog("Important Point:");
    addLog(
        "Linear Search does not require the data to be sorted."
    );

    addLog("");

    addLog("Real World Example:");
    addLog(
        "Searching for a name in an unsorted list by checking each name one by one is an example of Linear Search."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Linear Search is a searching algorithm that checks each element one by one until the target element is found."
    );

    addLog("");

    addLog("Program completed.");

}