export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Big O Notation?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Big O notation is used to describe how the time or space of an algorithm grows as the input size increases."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Big O na input size increase aagumbothu algorithm evlo fast-ah or slow-ah perform aaguthu-nu describe panna use pannuvom."
    );

    addLog("");

    addLog("Why do we use Big O?");
    addLog("1. Algorithm performance compare panna.");
    addLog("2. Efficient algorithm choose panna.");
    addLog("3. Large input handle panna.");
    addLog("4. Time and memory usage understand panna.");

    addLog("");

    addLog("Common Big O Notations:");

    addLog("O(1) → Constant");
    addLog("O(log n) → Logarithmic");
    addLog("O(n) → Linear");
    addLog("O(n log n) → Linearithmic");
    addLog("O(n²) → Quadratic");

    addLog("");

    addLog("Example - O(1):");

    addLog("arr[0]");

    addLog(
        "The element can be accessed directly using its index."
    );

    addLog("");

    addLog("Example - O(n):");

    addLog("for each element in the array");
    addLog("    print(element)");

    addLog(
        "The loop may run once for every element."
    );

    addLog("");

    addLog("Example - O(n²):");

    addLog("for each element");
    addLog("    for each element");
    addLog("        compare values");

    addLog(
        "Nested loops can result in O(n²) time complexity."
    );

    addLog("");

    addLog("Performance Order:");

    addLog("O(1) → Very Fast");
    addLog("O(log n) → Fast");
    addLog("O(n) → Moderate");
    addLog("O(n log n) → Higher");
    addLog("O(n²) → Slower for large input");

    addLog("");

    addLog("Important Point:");
    addLog(
        "Big O usually focuses on how performance grows with input size, not the exact execution time."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Big O notation describes the time or space complexity of an algorithm as the input size grows."
    );

    addLog("");

    addLog("Program completed.");

}