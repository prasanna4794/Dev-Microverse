export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is express.Router() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "express.Router() is used to create and organize modular routes in Express.js."
    );

    addLog("");

    addLog("Example:");

    addLog("const express = require('express');");
    addLog("");

    addLog("const router = express.Router();");
    addLog("");

    addLog('router.get("/users", (req, res) => {');
    addLog('    res.send("Users List");');
    addLog("});");

    addLog("");

    addLog("module.exports = router;");

    addLog("");

    addLog("Output:");
    addLog("Users List");

    addLog("");

    addLog("Program completed.");
}