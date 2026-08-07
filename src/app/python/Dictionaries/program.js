export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Dictionaries in Python?");
    addLog("");

    addLog("Answer:");
    addLog("A Dictionary is a mutable collection that stores data as key-value pairs.");

    addLog("");

    const student = {
        name: "Prasanna",
        age: 25,
        city: "Chennai"
    };

    addLog("Example:");
    addLog("Name : " + student.name);
    addLog("Age : " + student.age);
    addLog("City : " + student.city);

    addLog("");

    addLog("Program completed.");

}