export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is res.json() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "res.json() is used to send a JSON response from the server to the client."
    );

    addLog("");

    addLog("Example:");
    addLog("res.json({");
    addLog('    name: "Prasanna",');
    addLog("    age: 25");
    addLog("});");

    addLog("");

    addLog("Output:");
    addLog('{ "name": "Prasanna", "age": 25 }');

    addLog("");

    addLog("Program completed.");
}