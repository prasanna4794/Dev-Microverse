export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Form Validation Parser?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Form Validation Parser is a reusable utility that checks form data against validation rules such as required fields, regular expressions, and conditional business rules."
    );

    addLog("");

    addLog("Required Validation:");

    addLog(
        'if (!data.name) return "Name is required";'
    );

    addLog("");

    addLog("Regex Validation:");

    addLog(
        'const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;'
    );

    addLog("");

    addLog(
        'emailRegex.test("test@gmail.com");'
    );

    addLog("");

    addLog("Conditional Business Rule:");

    addLog(
        'if (age < 18) return "Age must be 18 or above";'
    );

    addLog("");

    addLog("Validation Flow:");

    addLog("Form Data");
    addLog("    ↓");
    addLog("Validation Parser");
    addLog("    ↓");
    addLog("Read Rules");
    addLog("    ↓");
    addLog("Required Check");
    addLog("    ↓");
    addLog("Regex Check");
    addLog("    ↓");
    addLog("Business Rule Check");
    addLog("    ↓");
    addLog("Valid / Invalid");

    addLog("");

    addLog("Important:");

    addLog(
        "A validation parser centralizes form validation logic so the same rules can be reused across multiple forms."
    );

    addLog("");

    addLog("Program completed.");
}