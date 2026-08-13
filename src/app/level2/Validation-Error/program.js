export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Validation Error Message Boundary Box?");
    addLog("");

    addLog("Answer:");

    addLog(
        "A Validation Error Message Boundary Box is a reusable UI component that displays validation errors in a specific area of a form."
    );

    addLog("");

    addLog("Error Message Component:");

    addLog("function ErrorMessage({ message }) {");

    addLog("    if (!message) {");
    addLog("        return null;");
    addLog("    }");

    addLog("");

    addLog("    return (");

    addLog(
        '        <div className="error-box">'
    );

    addLog(
        "            ⚠ {message}"
    );

    addLog("        </div>");

    addLog("    );");

    addLog("}");

    addLog("");

    addLog("Example:");

    addLog(
        '<ErrorMessage message="Email is required" />'
    );

    addLog("");

    addLog("Output:");

    addLog(
        "⚠ Email is required"
    );

    addLog("");

    addLog("Validation Flow:");

    addLog("User enters data");
    addLog("       ↓");
    addLog("Validation");
    addLog("       ↓");
    addLog("Valid?");
    addLog("   ↙       ↘");
    addLog(" Yes        No");
    addLog("  ↓          ↓");
    addLog("Continue    Error");
    addLog("              ↓");
    addLog("       Error Message Box");

    addLog("");

    addLog("Important:");

    addLog(
        "Conditional rendering can be used to display the error only when an error exists."
    );

    addLog("");

    addLog("Program completed.");
}