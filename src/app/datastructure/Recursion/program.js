export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Recursion?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Recursion is a method where a function calls itself to solve a problem."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Recursion na oru function, same function-ah thirumba thirumba call panni problem solve pannurathu."
    );

    addLog("");

    addLog("Important Parts:");
    addLog("1. Base Case");
    addLog("2. Recursive Case");

    addLog("");

    addLog("Base Case:");
    addLog(
        "Base Case is the condition that stops the recursion."
    );

    addLog("");

    addLog("Recursive Case:");
    addLog(
        "Recursive Case is where the function calls itself."
    );

    addLog("");

    addLog("Example:");

    addLog("function countDown(n) {");
    addLog("    if (n === 0) return;");
    addLog("    console.log(n);");
    addLog("    countDown(n - 1);");
    addLog("}");

    addLog("");

    addLog("countDown(3)");

    addLog("");

    addLog("Output:");
    addLog("3");
    addLog("2");
    addLog("1");

    addLog("");

    addLog("How it works:");
    addLog("countDown(3)");
    addLog("    ↓");
    addLog("countDown(2)");
    addLog("    ↓");
    addLog("countDown(1)");
    addLog("    ↓");
    addLog("countDown(0)");
    addLog("    ↓");
    addLog("Stop");

    addLog("");

    addLog("Real World Example:");
    addLog(
        "A folder can contain another folder, which can contain another folder. Recursion can be used to process these nested folders."
    );

    addLog("");

    addLog("Common Uses:");
    addLog("Tree Traversal");
    addLog("Graph Traversal");
    addLog("Factorial");
    addLog("Fibonacci");
    addLog("Divide and Conquer");

    addLog("");

    addLog("Important Point:");
    addLog(
        "Every recursive function should have a base case to stop the recursion."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Recursion is a technique where a function calls itself repeatedly until a base condition is reached."
    );

    addLog("");

    addLog("Program completed.");

}