export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is position in CSS?");
    addLog("");

    addLog("Answer:");
    addLog("The position property controls where an element is placed on a webpage.");
    addLog("");

    addLog("Types of Position:");
    addLog("1. static");
    addLog("2. relative");
    addLog("3. absolute");
    addLog("4. fixed");
    addLog("5. sticky");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

</style>

<button class="button">
    Chat
</button>`);

    addLog("");

    addLog("Explanation:");
    addLog("position: fixed keeps the button fixed to the viewport.");
    addLog("The button remains visible while scrolling.");
    addLog("");

    addLog("Program completed.");

}