export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .html() method?");
    addLog("");

    addLog("Answer:");
    addLog(".html() is used to get or set the HTML content of an element.");
    addLog("");

    addLog("Example:");

    addLog(`<p id="text">Hello</p>

<button id="btn">
Change Text
</button>

<script>

$("#btn").click(function () {

    $("#text").html("<b>Welcome to jQuery</b>");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the button is clicked,");
    addLog("the paragraph content changes to bold text.");
    addLog("The HTML tags are also rendered.");
    addLog("");

    addLog("Program completed.");

}