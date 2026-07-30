export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is $(document).ready()?");
    addLog("");

    addLog("Answer:");
    addLog("$(document).ready() executes jQuery code only after the HTML document has fully loaded.");
    addLog("");

    addLog("Example:");

    addLog(`<script>

$(document).ready(function () {

    $("#btn").click(function () {

        alert("Button Clicked");

    });

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("The HTML page loads first.");
    addLog("After the page is ready, the jQuery code starts executing.");
    addLog("This prevents errors caused by accessing elements before they exist.");
    addLog("");

    addLog("Program completed.");

}