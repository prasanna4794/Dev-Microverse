export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Repeatable Form Section Grid Container?");
    addLog("");

    addLog("Answer:");

    addLog(
        "A Repeatable Form Section Grid Container is a reusable form component that allows users to add multiple copies of the same group of input fields and display them in a grid layout."
    );

    addLog("");

    addLog("Example Data:");

    addLog("const employees = [");
    addLog("    {");
    addLog('        name: "Prasanna",');
    addLog('        role: "Developer"');
    addLog("    },");
    addLog("    {");
    addLog('        name: "Kumar",');
    addLog('        role: "Designer"');
    addLog("    }");
    addLog("];");

    addLog("");

    addLog("Render Sections:");

    addLog("employees.map((employee, index) => (");
    addLog("    <div key={index}>");
    addLog("        <input value={employee.name} />");
    addLog("        <input value={employee.role} />");
    addLog("    </div>");
    addLog("));");

    addLog("");

    addLog("Add New Section:");

    addLog("const addEmployee = () => {");
    addLog("    setEmployees([");
    addLog("        ...employees,");
    addLog("        { name: '', role: '' }");
    addLog("    ]);");
    addLog("};");

    addLog("");

    addLog("Important Concepts:");

    addLog("useState → Store form sections");
    addLog("Array → Store multiple records");
    addLog("map() → Render each section");
    addLog("CSS Grid → Arrange sections");

    addLog("");

    addLog("Flow:");

    addLog("Click Add");
    addLog("    ↓");
    addLog("New object");
    addLog("    ↓");
    addLog("Array updated");
    addLog("    ↓");
    addLog("map()");
    addLog("    ↓");
    addLog("New form section");

    addLog("");

    addLog("Program completed.");
}