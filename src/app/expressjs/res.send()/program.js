export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is res.send() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "res.send() is used to send a response from the server to the client."
    );

    addLog("");

    addLog("Example:");
    addLog('app.get("/", (req, res) => {');
    addLog('    res.send("Hello Express.js");');
    addLog("});");

    addLog("");

    addLog("URL:");
    addLog("http://localhost:3000/");

    addLog("");

    addLog("Output:");
    addLog("Hello Express.js");

    addLog("");

    addLog("Program completed.");
}