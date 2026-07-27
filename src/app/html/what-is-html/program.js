export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is HTML?");
    addLog("");

    addLog("Answer:");
    addLog("HTML stands for HyperText Markup Language.");
    addLog("It is used to create the structure of web pages.");
    addLog("");
    addLog("HTML is not a programming language.");
    addLog("It is a markup language.");
    addLog("");

    addLog("Example:");

    addLog(`<!DOCTYPE html>
<html>
<head>
    <title>HTML Example</title>
</head>
<body>

    <h1>Welcome</h1>
    <p>This is HTML.</p>

</body>
</html>`);

    addLog("");

    addLog("Explanation:");
    addLog("<h1> creates a heading.");
    addLog("<p> creates a paragraph.");
    addLog("<body> contains the visible content.");
    addLog("");

    addLog("Program completed.");

}