export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is package.json in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "package.json is a configuration file that contains information about a Node.js project, including dependencies and scripts."
    );

    addLog("");

    addLog("Create package.json:");

    addLog("npm init -y");

    addLog("");

    addLog("Example:");

    addLog('{');
    addLog('    "name": "my-node-app",');
    addLog('    "version": "1.0.0",');
    addLog('    "scripts": {');
    addLog('        "start": "node server.js"');
    addLog('    },');
    addLog('    "dependencies": {');
    addLog('        "express": "^5.1.0"');
    addLog('    }');
    addLog('}');

    addLog("");

    addLog("Install Express:");

    addLog("npm install express");

    addLog("");

    addLog("Important:");
    addLog("package.json stores project information and dependencies.");

    addLog("");

    addLog("Program completed.");
}