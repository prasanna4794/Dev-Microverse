export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .val() method?");
    addLog("");

    addLog("Answer:");
    addLog(".val() is used to get or set the value of form elements.");
    addLog("");

    addLog("Example:");

    addLog(`<input id="name" value="Prasanna">

<button id="btn">
Show Value
</button>

<script>

$("#btn").click(function () {

    alert($("#name").val());

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the button is clicked,");
    addLog("the value inside the input box is displayed.");
    addLog("");

    addLog("Program completed.");

}