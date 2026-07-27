export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is CSS?");
    addLog("");

    addLog("Answer:");
    addLog("CSS stands for Cascading Style Sheets.");
    addLog("It is used to style HTML elements.");
    addLog("CSS is used to add colors, fonts, spacing, and layouts to web pages.");
    addLog("");

    addLog("Example:");

    addLog(`<style>
h1 {
    color: blue;
}

p {
    color: red;
}
</style>

<h1>Welcome</h1>

<p>This is CSS.</p>`);

    addLog("");

    addLog("Explanation:");
    addLog("CSS changes the appearance of HTML elements.");
    addLog("The h1 text is displayed in blue.");
    addLog("The p text is displayed in red.");
    addLog("");

    addLog("Program completed.");

}