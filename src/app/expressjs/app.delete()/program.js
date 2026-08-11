export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is app.delete() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "app.delete() is used to handle DELETE requests and remove existing data."
    );

    addLog("");

    addLog("Example:");

    addLog("app.delete('/users/:id', (req, res) => {");
    addLog("    const id = req.params.id;");
    addLog("");
    addLog("    res.json({");
    addLog('        message: "User deleted successfully",');
    addLog("        userId: id");
    addLog("    });");
    addLog("});");

    addLog("");

    addLog("Request:");
    addLog("DELETE /users/101");

    addLog("");

    addLog("Output:");
    addLog("User deleted successfully");

    addLog("");

    addLog("Program completed.");
}