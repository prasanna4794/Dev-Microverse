export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is DOCTYPE?");
    addLog("");

    addLog("Answer:");
    addLog("<!DOCTYPE html> tells the browser that this is an HTML5 document.");
    addLog("It helps the browser render the webpage in standards mode.");
    addLog("");

    addLog("Example:");

    addLog(`<!DOCTYPE html>
<html>
<head>
    <title>DOCTYPE Example</title>
</head>
<body>

    <h1>Hello World</h1>

</body>
</html>`);

    addLog("");

    addLog("Explanation:");
    addLog("<!DOCTYPE html> should always be the first line of an HTML document.");
    addLog("It tells the browser to use HTML5 standards while rendering the page.");
    addLog("");

    addLog("Program completed.");

}