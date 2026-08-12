export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the path module in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "The path module is a built-in Node.js module used to work with file and folder paths."
    );

    addLog("");

    addLog("Import path:");

    addLog('const path = require("path");');

    addLog("");

    addLog("Join Paths:");

    addLog("const filePath = path.join(");
    addLog('    "users",');
    addLog('    "documents",');
    addLog('    "file.txt"');
    addLog(");");

    addLog("");

    addLog("Output:");
    addLog("users/documents/file.txt");

    addLog("");

    addLog("Important path Methods:");

    addLog("path.join()     → Join paths");
    addLog("path.basename() → Get file name");
    addLog("path.dirname()  → Get folder path");
    addLog("path.extname()   → Get file extension");

    addLog("");

    addLog("Program completed.");
}