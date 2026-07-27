export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the viewport meta tag?");
    addLog("");

    addLog("Answer:");
    addLog("The viewport meta tag makes a webpage responsive.");
    addLog("It adjusts the webpage to the width of the user's device.");
    addLog("");

    addLog("Example:");

    addLog(`<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">`);

    addLog("");

    addLog("Explanation:");
    addLog("width=device-width sets the page width equal to the device width.");
    addLog("initial-scale=1.0 sets the initial zoom level.");
    addLog("This helps the webpage display correctly on mobile, tablet, and desktop screens.");
    addLog("");

    addLog("Program completed.");

}