export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .on() method?");
    addLog("");

    addLog("Answer:");
    addLog(".on() is used to attach event handlers to HTML elements.");
    addLog("");

    addLog("Example:");

    addLog(`<button id="btn">
Click Me
</button>

<script>

$("#btn").on("click", function () {

    alert("Button Clicked");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("The .on() method listens for the specified event.");
    addLog("When the event occurs, the function executes.");
    addLog("");

    addLog("Program completed.");

}