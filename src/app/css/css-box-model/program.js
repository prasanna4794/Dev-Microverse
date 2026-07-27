export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the CSS Box Model?");
    addLog("");

    addLog("Answer:");
    addLog("Every HTML element is treated as a rectangular box.");
    addLog("The CSS Box Model consists of Content, Padding, Border, and Margin.");
    addLog("");

    addLog("Parts of the Box Model:");
    addLog("1. Content - The actual text or image.");
    addLog("2. Padding - Space inside the border.");
    addLog("3. Border - Surrounds the content and padding.");
    addLog("4. Margin - Space outside the border.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.box {

    padding: 20px;

    border: 3px solid black;

    margin: 30px;

}

</style>

<div class="box">
    Hello
</div>`);

    addLog("");

    addLog("Explanation:");
    addLog("Content contains the text 'Hello'.");
    addLog("Padding adds space inside the border.");
    addLog("Border surrounds the content.");
    addLog("Margin creates space outside the border.");
    addLog("");

    addLog("Program completed.");

}