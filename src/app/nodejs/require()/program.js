export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is require() in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "require() is used to import or load modules and packages into a Node.js file."
    );

    addLog("");

    addLog("Example:");

    addLog('const fs = require("fs");');

    addLog("");

    addLog("Another Example:");

    addLog('const express = require("express");');

    addLog("");

    addLog("Own Module Example:");

    addLog('const add = require("./math");');

    addLog("");

    addLog("Output:");
    addLog("Module loaded successfully");

    addLog("");

    addLog("Important:");
    addLog(
        "require() can load built-in modules, npm packages, and local modules."
    );

    addLog("");

    addLog("Program completed.");
}