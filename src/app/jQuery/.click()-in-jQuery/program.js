export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .click() method?");
    addLog("");

    addLog("Answer:");
    addLog(".click() is used to handle the click event of an HTML element.");
    addLog("");

    addLog("Example:");

    addLog(`<button id="btn">
Click Me
</button>

<script>

$("#btn").click(function () {

    alert("Button Clicked");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("When the button is clicked,");
    addLog("the click event executes and shows an alert message.");
    addLog("");

    addLog("Program completed.");

}