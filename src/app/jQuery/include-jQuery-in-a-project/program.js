export default function runProgram(addLog) {

    addLog("Question:");
    addLog("How do you include jQuery in a project?");
    addLog("");

    addLog("Answer:");
    addLog("Include the jQuery library using a CDN inside the script tag.");
    addLog("");

    addLog("Example:");

    addLog(`<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<script>

$(document).ready(function () {

    $("#btn").click(function () {

        alert("Hello jQuery");

    });

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("First, load the jQuery library using the CDN.");
    addLog("After that, you can use jQuery methods like $(), hide(), show(), and css().");
    addLog("");

    addLog("Program completed.");

}