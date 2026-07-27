export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between absolute and relative paths?");
    addLog("");

    addLog("Answer:");
    addLog("An absolute path contains the complete URL.");
    addLog("A relative path refers to a file based on the current project or folder.");
    addLog("");

    addLog("Difference:");
    addLog("- Absolute Path: Full URL.");
    addLog("- Relative Path: Local project path.");
    addLog("");

    addLog("Example:");

    addLog(`<img src="images/logo.png">

<img src="https://example.com/logo.png">`);

    addLog("");

    addLog("Explanation:");
    addLog("images/logo.png is a relative path because it points to a file inside the project.");
    addLog("https://example.com/logo.png is an absolute path because it contains the complete URL.");
    addLog("");

    addLog("Program completed.");

}