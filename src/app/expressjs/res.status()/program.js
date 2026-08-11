export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is res.status() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "res.status() is used to set the HTTP status code of the response."
    );

    addLog("");

    addLog("Example:");
    addLog('res.status(200).send("User found");');

    addLog("");

    addLog("Status Code:");
    addLog("200 OK");

    addLog("");

    addLog("Output:");
    addLog("User found");

    addLog("");

    addLog("Program completed.");
}