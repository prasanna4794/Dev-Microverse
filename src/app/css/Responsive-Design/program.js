export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Responsive Design?");
    addLog("");

    addLog("Answer:");
    addLog("Responsive Design makes a website adapt to different screen sizes.");
    addLog("It provides a good user experience on mobile, tablet, and desktop.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.box {
    width: 400px;
}

@media (max-width: 600px) {

    .box {
        width: 100%;
    }

}

</style>

<div class="box">
    Responsive Box
</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("On screens smaller than 600px, the box width becomes 100%.");
    addLog("This makes the layout fit mobile screens.");
    addLog("");

    addLog("Program completed.");

}