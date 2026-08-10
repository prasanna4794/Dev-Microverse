export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is express.json() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "express.json() is built-in middleware used to parse incoming JSON request data."
    );

    addLog("");

    addLog("Example:");
    addLog("app.use(express.json());");

    addLog("");

    addLog("Request Body:");
    addLog('{ "name": "Prasanna", "age": 25 }');

    addLog("");

    addLog("Output:");
    addLog("JSON data received successfully.");

    addLog("");

    addLog("Program completed.");
}