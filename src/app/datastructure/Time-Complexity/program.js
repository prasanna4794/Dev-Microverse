export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Time Complexity?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Time Complexity is used to measure how the running time of an algorithm changes when the input size increases."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Time Complexity na input data increase aagumbothu, program execute aaga evlo time increase aagum-nu measure pannurathu."
    );

    addLog("");

    addLog("Why do we use Time Complexity?");
    addLog("1. Algorithm performance compare panna.");
    addLog("2. Fast algorithm choose panna.");
    addLog("3. Large data handle panna.");
    addLog("4. Slow code identify panna.");

    addLog("");

    addLog("Common Time Complexities:");

    addLog("O(1) → Constant");
    addLog("O(log n) → Logarithmic");
    addLog("O(n) → Linear");
    addLog("O(n log n) → Linearithmic");
    addLog("O(n²) → Quadratic");

    addLog("");

    addLog("Example - O(1):");

    addLog("arr[0]");

    addLog(
        "Direct index access takes constant time."
    );

    addLog("");

    addLog("Example - O(n):");

    addLog("for each element in the array");
    addLog("    check the element");

    addLog(
        "The algorithm may check every element."
    );

    addLog("");

    addLog("Example - O(n²):");

    addLog("for each element");
    addLog("    for each element");
    addLog("        compare values");

    addLog(
        "Two nested loops can result in O(n²) time complexity."
    );

    addLog("");

    addLog("Important Point:");
    addLog(
        "Lower time complexity is generally better for large inputs."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Time Complexity is a measure of how the running time of an algorithm grows as the input size increases."
    );

    addLog("");

    addLog("Program completed.");

}