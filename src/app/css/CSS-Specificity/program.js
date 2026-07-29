export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is CSS Specificity?");
    addLog("");

    addLog("Answer:");
    addLog("CSS Specificity decides which CSS rule has the highest priority when multiple rules target the same element.");
    addLog("");

    addLog("Priority:");
    addLog("1. Inline Style");
    addLog("2. ID Selector");
    addLog("3. Class Selector");
    addLog("4. Element Selector");
    addLog("");

    addLog("Example:");

    addLog(`<style>

h1 {
    color: green;
}

.title {
    color: blue;
}

#heading {
    color: red;
}

</style>

<h1 id="heading" class="title">
    Welcome
</h1>`);

    addLog("");

    addLog("Explanation:");
    addLog("The h1 element matches three selectors.");
    addLog("The ID selector has higher specificity than the class and element selectors.");
    addLog("So the text color becomes red.");
    addLog("");

    addLog("Program completed.");

}