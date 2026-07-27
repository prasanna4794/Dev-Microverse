export default function runProgram(addLog) {

    addLog("Question:");
    addLog("How do you create a form?");
    addLog("");

    addLog("Answer:");
    addLog("A form is created using the <form> element.");
    addLog("User input is collected using <input> elements.");
    addLog("A <button> is used to submit the form.");
    addLog("");

    addLog("Example:");

    addLog(`<form>

    <input
        type="text"
        placeholder="Name">

    <button>
        Submit
    </button>

</form>`);

    addLog("");

    addLog("Explanation:");
    addLog("<form> creates the form.");
    addLog("<input> is used to receive user input.");
    addLog("<button> submits the form.");
    addLog("");

    addLog("Program completed.");

}