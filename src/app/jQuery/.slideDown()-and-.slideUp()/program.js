export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are .slideDown() and .slideUp() methods?");
    addLog("");

    addLog("Answer:");
    addLog(".slideDown() shows hidden elements with slide animation.");
    addLog(".slideUp() hides visible elements with slide animation.");
    addLog("");

    addLog("Example:");

    addLog(`<div id="box">
This is hidden content
</div>

<button id="hide">
Slide Up
</button>

<button id="show">
Slide Down
</button>

<script>

$("#hide").click(function(){

    $("#box").slideUp();

});

$("#show").click(function(){

    $("#box").slideDown();

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("slideUp() hides the element by sliding upward.");
    addLog("slideDown() displays the element by sliding downward.");
    addLog("");

    addLog("Program completed.");

}