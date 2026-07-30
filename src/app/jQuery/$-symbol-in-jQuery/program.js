export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the $ symbol in jQuery?");
    addLog("");

    addLog("Answer:");
    addLog("The $ symbol is the jQuery shortcut.");
    addLog("It is used to select HTML elements and perform actions.");
    addLog("");

    addLog("Example:");

    addLog(`$("#title").css("color", "red");

$("p").hide();

$("#btn").click(function () {

    alert("Button Clicked");

});`);

    addLog("");

    addLog("Explanation:");
    addLog("$ selects HTML elements.");
    addLog("After selecting an element, we can use jQuery methods like css(), hide(), and click().");
    addLog("");

    addLog("Program completed.");

}