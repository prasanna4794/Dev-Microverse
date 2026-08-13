export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Dependent Conditional Field Container?");
    addLog("");

    addLog("Answer:");

    addLog(
        "A Dependent Conditional Field Container is a reusable form component that displays, hides, or changes a field based on the value selected in another field."
    );

    addLog("");

    addLog("Parent Field:");

    addLog(
        "Do you have a driving license?"
    );

    addLog("");

    addLog("User selects Yes:");

    addLog(
        "Show License Number field"
    );

    addLog("");

    addLog("User selects No:");

    addLog(
        "Hide License Number field"
    );

    addLog("");

    addLog("Conditional Rendering:");

    addLog(
        '{hasLicense === "yes" && ('
    );

    addLog(
        '    <input type="text" />'
    );

    addLog(")}");

    addLog("");

    addLog("Flow:");

    addLog("Parent Field");
    addLog("     ↓");
    addLog("User Selection");
    addLog("     ↓");
    addLog("Condition");
    addLog("     ↓");
    addLog("Dependent Field");
    addLog("     ↓");
    addLog("Show / Hide");

    addLog("");

    addLog("Important:");

    addLog(
        "Conditional rendering is commonly used to display dependent form fields."
    );

    addLog("");

    addLog("Program completed.");
}