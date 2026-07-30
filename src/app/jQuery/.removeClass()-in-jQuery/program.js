export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .removeClass() method?");
    addLog("");

    addLog("Answer:");
    addLog(".removeClass() is used to remove a CSS class from an HTML element.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.highlight {

    color: red;

    font-weight: bold;

}

</style>

<p id="text" class="highlight">
Hello jQuery
</p>

<button id="btn">
Remove Class
</button>

<script>

$("#btn").click(function () {

    $("#text").removeClass("highlight");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("Initially, the paragraph has the 'highlight' class.");
    addLog("When the button is clicked,");
    addLog("the 'highlight' class is removed.");
    addLog("");

    addLog("Program completed.");

}