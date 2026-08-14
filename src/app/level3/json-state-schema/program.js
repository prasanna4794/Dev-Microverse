export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a JSON State Schema Validator?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A JSON State Schema Validator checks whether JSON data follows a predefined structure, required fields, and expected data types."
    );

    addLog("");

    addLog("Schema:");

    addLog('name → string');
    addLog('age → number');
    addLog('isActive → boolean');

    addLog("");

    addLog("Valid Data:");

    addLog(
        'name: "Prasanna"'
    );

    addLog(
        "age: 25"
    );

    addLog(
        "isActive: true"
    );

    addLog("");

    addLog("Invalid Data:");

    addLog(
        'name: 123'
    );

    addLog(
        'age: "25"'
    );

    addLog("");

    addLog("Validation:");

    addLog(
        "Valid → Continue"
    );

    addLog(
        "Invalid → Reject / Show Error"
    );

    addLog("");

    addLog("Incoming Data Flow:");

    addLog("API Response");

    addLog("    ↓");

    addLog("JSON Validator");

    addLog("    ↓");

    addLog("Valid / Invalid");

    addLog("");

    addLog("Outgoing Data Flow:");

    addLog("Application State");

    addLog("    ↓");

    addLog("JSON Validator");

    addLog("    ↓");

    addLog("Valid → Send API");

    addLog("");

    addLog("Important:");

    addLog(
        "A schema validator prevents unexpected or incorrectly typed data from entering or leaving the application."
    );

    addLog("");

    addLog("Program completed.");
}