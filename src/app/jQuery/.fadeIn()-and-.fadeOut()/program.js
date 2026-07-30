export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are .fadeIn() and .fadeOut() methods?");
    addLog("");

    addLog("Answer:");
    addLog(".fadeIn() shows hidden elements with fade animation.");
    addLog(".fadeOut() hides visible elements with fade animation.");
    addLog("");

    addLog("Example:");

    addLog(`<p id="text">
Hello jQuery
</p>

<button id="hide">
Fade Out
</button>

<button id="show">
Fade In
</button>

<script>

$("#hide").click(function(){

    $("#text").fadeOut();

});

$("#show").click(function(){

    $("#text").fadeIn();

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("fadeOut() slowly hides the element.");
    addLog("fadeIn() slowly displays the hidden element.");
    addLog("");

    addLog("Program completed.");

}