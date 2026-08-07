export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Iterators and Generators in Python?");
    addLog("");

    addLog("Answer:");
    addLog("Iterators and Generators return values one at a time, making data processing memory efficient.");

    addLog("");

    function* numbers() {
        yield 1;
        yield 2;
        yield 3;
    }

    const iterator = numbers();

    addLog("Example:");
    addLog(iterator.next().value);
    addLog(iterator.next().value);
    addLog(iterator.next().value);

    addLog("");

    addLog("Program completed.");

}