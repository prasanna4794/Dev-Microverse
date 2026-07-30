export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .toggleClass() method?");
    addLog("");

    addLog("Answer:");
    addLog(".toggleClass() is used to add or remove a CSS class.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.active {

    background: green;

    color: white;

}

</style>

<button id="btn">
Click Me
</button>

<script>

$("#btn").click(function () {

    $("#btn").toggleClass("active");

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("First click: 'active' class is added.");
    addLog("Second click: 'active' class is removed.");
    addLog("Every click alternates between add and remove.");
    addLog("");

    addLog("Program completed.");

}