export default function runProgram(addLog) {

    addLog("Question:");
    addLog(
        "What is the difference between app.get(), app.post(), app.put(), and app.delete()?"
    );

    addLog("");

    addLog("Answer:");
    addLog("GET is used to read data.");
    addLog("POST is used to create new data.");
    addLog("PUT is used to update existing data.");
    addLog("DELETE is used to remove existing data.");

    addLog("");

    addLog("Example:");

    addLog('app.get("/users", (req, res) => {');
    addLog('    res.send("Get Users");');
    addLog("});");

    addLog("");

    addLog('app.post("/users", (req, res) => {');
    addLog('    res.send("Create User");');
    addLog("});");

    addLog("");

    addLog('app.put("/users/101", (req, res) => {');
    addLog('    res.send("Update User");');
    addLog("});");

    addLog("");

    addLog('app.delete("/users/101", (req, res) => {');
    addLog('    res.send("Delete User");');
    addLog("});");

    addLog("");

    addLog("CRUD:");
    addLog("Create  → POST");
    addLog("Read    → GET");
    addLog("Update  → PUT");
    addLog("Delete  → DELETE");

    addLog("");

    addLog("Program completed.");
}