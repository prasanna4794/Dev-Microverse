export default function runProgram(addLog) {

    addLog("Question:");
    addLog(
        "What is a Complex Select/Dropdown Engine with local caching?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Complex Select/Dropdown Engine is a reusable component that displays options, handles selection, and can cache previously loaded options for faster access."
    );

    addLog("");

    addLog("Dropdown Example:");

    addLog('<select value={selected}>');

    addLog('    <option value="">Select Country</option>');

    addLog('    <option value="1">India</option>');

    addLog('    <option value="2">USA</option>');

    addLog('    <option value="3">UK</option>');

    addLog("</select>");

    addLog("");

    addLog("Local Cache:");

    addLog(
        'localStorage.setItem("countryOptions", JSON.stringify(data));'
    );

    addLog("");

    addLog("Read Cache:");

    addLog(
        'const cachedData = localStorage.getItem("countryOptions");'
    );

    addLog("");

    addLog("Flow:");

    addLog("Check localStorage");

    addLog("      ↓");

    addLog("Data available?");

    addLog("      ↓");

    addLog("Yes → Use cached data");

    addLog("No → Load data and save to localStorage");

    addLog("");

    addLog("Important:");

    addLog(
        "Local caching helps reuse previously loaded dropdown data."
    );

    addLog("");

    addLog("Program completed.");
}