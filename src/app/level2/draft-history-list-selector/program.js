export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Draft History List Selector View?");
    addLog("");

    addLog("Answer:");

    addLog(
        "A Draft History List Selector View is a reusable UI component that displays previously saved drafts in a list and allows users to select and restore a draft."
    );

    addLog("");

    addLog("Draft Example:");

    addLog("const drafts = [");

    addLog("    {");
    addLog("        id: 1,");
    addLog('        name: "Job Application",');
    addLog('        date: "Aug 10, 2026"');
    addLog("    },");

    addLog("    {");
    addLog("        id: 2,");
    addLog('        name: "Profile Update",');
    addLog('        date: "Aug 12, 2026"');
    addLog("    }");

    addLog("];");

    addLog("");

    addLog("Render Draft List:");

    addLog("drafts.map((draft) => (");

    addLog("    <div key={draft.id}>");

    addLog("        <h3>{draft.name}</h3>");

    addLog("        <p>{draft.date}</p>");

    addLog("        <button>");

    addLog("            Open");

    addLog("        </button>");

    addLog("    </div>");

    addLog("));");

    addLog("");

    addLog("Select Draft:");

    addLog("const selectDraft = (draft) => {");

    addLog(
        '    console.log("Selected Draft:", draft);'
    );

    addLog("};");

    addLog("");

    addLog("Flow:");

    addLog("Save Form");
    addLog("    ↓");
    addLog("Create Draft");
    addLog("    ↓");
    addLog("Store Draft");
    addLog("    ↓");
    addLog("Draft History List");
    addLog("    ↓");
    addLog("Select Draft");
    addLog("    ↓");
    addLog("Restore Data");
    addLog("    ↓");
    addLog("Continue Editing");

    addLog("");

    addLog("Important:");

    addLog(
        "Draft history allows users to continue incomplete forms without losing previously entered data."
    );

    addLog("");

    addLog("Program completed.");
}