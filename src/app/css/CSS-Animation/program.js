export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are CSS Animations?");
    addLog("");

    addLog("Answer:");
    addLog("CSS Animations are used to create movement and visual effects for HTML elements.");
    addLog("They are created using the animation property and @keyframes.");
    addLog("");

    addLog("Example:");

    addLog(`<style>

.box {
    width: 100px;
    height: 100px;
    background: blue;
    animation: move 2s infinite;
}

@keyframes move {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }

}

</style>

<div class="box"></div>`);

    addLog("");

    addLog("Explanation:");
    addLog("The box moves from left to right.");
    addLog("The animation repeats forever because of infinite.");
    addLog("");

    addLog("Program completed.");

}