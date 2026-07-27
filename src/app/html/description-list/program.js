export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Description List?");
    addLog("");

    addLog("Answer:");
    addLog("A Description List is used to display terms and their descriptions.");
    addLog("");

    addLog("Example:");

    addLog(`<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>

    <dt>JavaScript</dt>
    <dd>Programming Language</dd>
</dl>`);

    addLog("");

    addLog("Output:");
    addLog("HTML");
    addLog("  HyperText Markup Language");
    addLog("");
    addLog("CSS");
    addLog("  Cascading Style Sheets");
    addLog("");
    addLog("JavaScript");
    addLog("  Programming Language");
    addLog("");

    addLog("Explanation:");
    addLog("<dl> creates a description list.");
    addLog("<dt> defines the term.");
    addLog("<dd> defines the description.");
    addLog("");

    addLog("Program completed.");

}