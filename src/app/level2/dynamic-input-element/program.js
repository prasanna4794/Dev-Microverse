export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Dynamic Input Element?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A Dynamic Input Element is a reusable input component that can create different types of form fields based on the required type."
    );

    addLog("");

    addLog("Dynamic Input Component:");

    addLog("function DynamicInput({ type, placeholder }) {");
    addLog("    return (");
    addLog("        <input");
    addLog("            type={type}");
    addLog("            placeholder={placeholder}");
    addLog("        />");
    addLog("    );");
    addLog("}");

    addLog("");

    addLog("Text Input:");

    addLog(
        '<DynamicInput type="text" placeholder="Enter your name" />'
    );

    addLog("");

    addLog("Number Input:");

    addLog(
        '<DynamicInput type="number" placeholder="Enter your age" />'
    );

    addLog("");

    addLog("Email Input:");

    addLog(
        '<DynamicInput type="email" placeholder="Enter your email" />'
    );

    addLog("");

    addLog("Important:");
    addLog(
        "The same component can be reused for different input types."
    );

    addLog("");

    addLog("text   → Text field");
    addLog("number → Number field");
    addLog("email  → Email field");

    addLog("");

    addLog("Program completed.");
}