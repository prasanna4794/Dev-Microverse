export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between localStorage and sessionStorage?");
    addLog("");

    addLog("Answer:");
    addLog("localStorage stores data permanently.");
    addLog("sessionStorage stores data temporarily for the current browser tab.");
    addLog("");

    addLog("Difference:");
    addLog("- localStorage: Data remains after the browser is closed.");
    addLog("- sessionStorage: Data is removed when the browser tab is closed.");
    addLog("");

    addLog("Example:");

    addLog(`<!DOCTYPE html>
<html>
<body>

<button onclick="save()">
    Save
</button>

<script>

function save() {

    localStorage.setItem("name", "Prasanna");

    sessionStorage.setItem("city", "Chennai");

}

</script>

</body>
</html>`);

    addLog("");

    addLog("Explanation:");
    addLog("localStorage stores 'name' permanently until it is manually cleared.");
    addLog("sessionStorage stores 'city' only for the current browser tab session.");
    addLog("");

    addLog("Program completed.");

}