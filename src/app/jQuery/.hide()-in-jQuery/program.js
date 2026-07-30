export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .hide() method?");
    addLog("");

    addLog("Answer:");
    addLog(".hide() is used to hide the selected HTML element.");
    addLog("");

    addLog("Example:");

    addLog(`<button id="btn">
Hide Paragraph
</button>

<p id="text">
Hello jQuery
</p>

<script>

$("#btn").click(function () {

    $("#text").hide();

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the button is clicked,");
    addLog("the paragraph becomes hidden.");
    addLog("");

    addLog("Program completed.");

}