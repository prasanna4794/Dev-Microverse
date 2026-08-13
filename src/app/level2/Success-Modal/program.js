export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Form Submission Success Modal Window?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Form Submission Success Modal Window is a reusable UI component that displays a confirmation message after a form has been successfully submitted."
    );

    addLog("");

    addLog("Initial State:");

    addLog(
        'const [showModal, setShowModal] = useState(false);'
    );

    addLog("");

    addLog("After Successful Submission:");

    addLog(
        "setShowModal(true);"
    );

    addLog("");

    addLog("Display Modal:");

    addLog(
        "{showModal && ("
    );

    addLog(
        "    <div>Success!</div>"
    );

    addLog(")}");

    addLog("");

    addLog("Close Modal:");

    addLog(
        "setShowModal(false);"
    );

    addLog("");

    addLog("Flow:");

    addLog("User fills form");
    addLog("      ↓");
    addLog("Click Submit");
    addLog("      ↓");
    addLog("Validate Form");
    addLog("      ↓");
    addLog("Submit Data");
    addLog("      ↓");
    addLog("Success");
    addLog("      ↓");
    addLog("Show Success Modal");
    addLog("      ↓");
    addLog("User clicks OK");
    addLog("      ↓");
    addLog("Close Modal");

    addLog("");

    addLog("Important:");

    addLog(
        "A success modal gives the user clear confirmation that the form submission was completed successfully."
    );

    addLog("");

    addLog("Program completed.");
}