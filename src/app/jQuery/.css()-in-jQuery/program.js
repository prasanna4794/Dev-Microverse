export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .css() method?");
    addLog("");

    addLog("Answer:");
    addLog(".css() is used to get or set CSS properties of HTML elements.");
    addLog("");

    addLog("Example:");

    addLog(`<p id="text">
Hello jQuery
</p>

<button id="btn">
Change Color
</button>

<script>

$("#btn").click(function () {

    $("#text").css("color", "red");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the button is clicked,");
    addLog("the paragraph text color changes to red.");
    addLog("");

    addLog("Program completed.");

}