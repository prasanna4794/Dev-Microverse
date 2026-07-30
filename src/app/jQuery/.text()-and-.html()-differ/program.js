export default function runProgram(addLog) {

    addLog("Question:");
    addLog("Difference between .text() and .html()?");
    addLog("");

    addLog("Answer:");
    addLog(".text() is used for plain text.");
    addLog(".html() is used for HTML content.");
    addLog("");

    addLog("Example:");

    addLog(`$("#title").text("<b>Hello</b>");

$("#message").html("<b>Hello</b>");`);

    addLog("");

    addLog("Explanation:");
    addLog(".text() displays: <b>Hello</b>");
    addLog(".html() displays: Hello (in bold).");
    addLog("");

    addLog("Program completed.");

}