export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is iframe?");
    addLog("");

    addLog("Answer:");
    addLog("An iframe is used to embed another webpage inside the current webpage.");
    addLog("");

    addLog("Example:");

    addLog(`<iframe
src="https://example.com"
width="400"
height="200">
</iframe>`);

    addLog("");

    addLog("Explanation:");
    addLog("<iframe> embeds another webpage.");
    addLog("The src attribute specifies the webpage URL.");
    addLog("width and height define the iframe size.");
    addLog("");

    addLog("Program completed.");

}