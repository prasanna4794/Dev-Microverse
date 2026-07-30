export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .toggle() method?");
    addLog("");

    addLog("Answer:");
    addLog(".toggle() is used to show or hide the selected HTML element.");
    addLog("");

    addLog("Example:");

    addLog(`<button id="btn">
Toggle Paragraph
</button>

<p id="text">
Hello jQuery
</p>

<script>

$("#btn").click(function () {

    $("#text").toggle();

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("If the paragraph is visible, it becomes hidden.");
    addLog("If the paragraph is hidden, it becomes visible.");
    addLog("");

    addLog("Program completed.");

}