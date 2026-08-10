export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Express.js is a lightweight and flexible Node.js web framework used to build web applications and REST APIs."
    );

    addLog("");

    addLog("Example:");
    addLog('app.get("/", (req, res) => {');
    addLog('    res.send("Hello Express.js");');
    addLog("});");

    addLog("");

    addLog("Output:");
    addLog("Hello Express.js");

    addLog("");

    addLog("Program completed.");
}