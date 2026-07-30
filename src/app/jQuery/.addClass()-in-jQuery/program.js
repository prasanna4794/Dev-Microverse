export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .addClass() method?");
    addLog("");

    addLog("Answer:");
    addLog(".addClass() is used to add a CSS class to an HTML element.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.highlight {

    color: red;

    font-weight: bold;

}

</style>

<p id="text">
Hello jQuery
</p>

<button id="btn">
Add Class
</button>

<script>

$("#btn").click(function () {

    $("#text").addClass("highlight");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the button is clicked,");
    addLog("the 'highlight' class is added to the paragraph.");
    addLog("The text becomes red and bold.");
    addLog("");

    addLog("Program completed.");

}