export default function runProgram(addLog) {

    addLog("Question:");
    addLog("Difference between target=\"_blank\" and \"_self\"?");
    addLog("");

    addLog("Answer:");
    addLog("target=\"_blank\" opens the link in a new tab.");
    addLog("target=\"_self\" opens the link in the same tab.");
    addLog("");

    addLog("Example:");

    addLog(`<a href="page.html" target="_blank">
    Open
</a>

<a href="page.html" target="_self">
    Open
</a>`);

    addLog("");

    addLog("Explanation:");
    addLog("target=\"_blank\" opens the linked page in a new browser tab.");
    addLog("target=\"_self\" opens the linked page in the current browser tab.");
    addLog("_self is the default value if the target attribute is not specified.");
    addLog("");

    addLog("Program completed.");

}