export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .attr() method?");
    addLog("");

    addLog("Answer:");
    addLog(".attr() is used to get or set HTML element attributes.");
    addLog("");

    addLog("Example:");

    addLog(`<img id="logo" src="logo.png">

<button id="btn">
Change Image
</button>

<script>

$("#btn").click(function () {

    $("#logo").attr("src", "newlogo.png");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the button is clicked,");
    addLog("the image src attribute changes from logo.png to newlogo.png.");
    addLog("");

    addLog("Program completed.");

}