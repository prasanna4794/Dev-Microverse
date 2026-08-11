export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is app.put() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "app.put() is used to handle PUT requests and update existing data."
    );

    addLog("");

    addLog("Example:");

    addLog("app.put('/users/:id', (req, res) => {");
    addLog("    const id = req.params.id;");
    addLog("    const user = req.body;");
    addLog("");
    addLog("    res.json({");
    addLog('        message: "User updated",');
    addLog("        userId: id,");
    addLog("        user: user");
    addLog("    });");
    addLog("});");

    addLog("");

    addLog("Request:");
    addLog("PUT /users/101");

    addLog("");

    addLog("Request Body:");
    addLog('{ "name": "Prasanna Kumar", "age": 26 }');

    addLog("");

    addLog("Output:");
    addLog("User updated");

    addLog("");

    addLog("Program completed.");
}