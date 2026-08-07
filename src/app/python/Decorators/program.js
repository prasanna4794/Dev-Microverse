export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Decorators in Python?");
    addLog("");

    addLog("Answer:");
    addLog("Decorators add extra functionality to a function without modifying the original function.");

    addLog("");

    addLog("Example:");

    function greet() {
        addLog("Hello Python");
    }

    function decorator(func) {
        addLog("Before Function");
        func();
        addLog("After Function");
    }

    decorator(greet);

    addLog("");

    addLog("Program completed.");

}