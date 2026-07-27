export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are the types of CSS?");
    addLog("");

    addLog("Answer:");
    addLog("There are three types of CSS:");
    addLog("1. Inline CSS");
    addLog("2. Internal CSS");
    addLog("3. External CSS");
    addLog("");

    addLog("Inline CSS:");
    addLog("Applied to a single HTML element using the style attribute.");
    addLog("");

    addLog("Example:");

    addLog(`<p style="color:red;">Inline CSS</p>`);

    addLog("");

    addLog("Internal CSS:");
    addLog("Applied to a single HTML page using the <style> tag inside the <head> section.");
    addLog("");

    addLog("Example:");

    addLog(`<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>`);

    addLog("");

    addLog("External CSS:");
    addLog("Applied using a separate .css file and linked to multiple HTML pages.");
    addLog("");

    addLog("Example:");

    addLog(`<head>
    <link rel="stylesheet" href="style.css">
</head>`);

    addLog("");

    addLog("Explanation:");
    addLog("Inline CSS is used for one element.");
    addLog("Internal CSS is used for one HTML page.");
    addLog("External CSS is reusable across multiple pages in a project.");
    addLog("");

    addLog("Program completed.");

}