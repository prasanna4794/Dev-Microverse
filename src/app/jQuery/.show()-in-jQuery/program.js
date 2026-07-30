export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .show() method?");
    addLog("");

    addLog("Answer:");
    addLog(".show() is used to display a hidden HTML element.");
    addLog("");

    addLog("Example:");

    addLog(`<button id="btn">
Show Paragraph
</button>

<p id="text" style="display:none;">
Hello jQuery
</p>

<script>

$("#btn").click(function () {

    $("#text").show();

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("Initially, the paragraph is hidden.");
    addLog("When the button is clicked,");
    addLog("the paragraph becomes visible.");
    addLog("");

    addLog("Program completed.");

}