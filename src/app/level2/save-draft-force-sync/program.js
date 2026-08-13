export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Save Draft / Force Sync Button Module?");
    addLog("");

    addLog("Answer:");

    addLog(
        "A Save Draft / Force Sync Button Module is a reusable component that allows users to save current form data as a draft and manually synchronize the data with the server."
    );

    addLog("");

    addLog("Save Draft:");

    addLog("const saveDraft = () => {");

    addLog("    const draft = {");
    addLog("        name: name");
    addLog("    };");

    addLog("");

    addLog(
        '    localStorage.setItem("formDraft", JSON.stringify(draft));'
    );

    addLog("};");

    addLog("");

    addLog("Force Sync:");

    addLog("const forceSync = async () => {");

    addLog(
        '    setStatus("Syncing...");'
    );

    addLog("");

    addLog(
        "    // Send data to server using an API"
    );

    addLog("");

    addLog(
        '    setStatus("Data synced successfully");'
    );

    addLog("};");

    addLog("");

    addLog("Buttons:");

    addLog(
        '<button onClick={saveDraft}>Save Draft</button>'
    );

    addLog(
        '<button onClick={forceSync}>Force Sync</button>'
    );

    addLog("");

    addLog("Flow:");

    addLog("Form Data");
    addLog("    ↓");
    addLog("Save Draft");
    addLog("    ↓");
    addLog("Local Storage / IndexedDB");
    addLog("    ↓");
    addLog("Force Sync");
    addLog("    ↓");
    addLog("Server");
    addLog("    ↓");
    addLog("Sync Success / Error");

    addLog("");

    addLog("Important:");

    addLog(
        "Save Draft stores the current progress, while Force Sync manually starts synchronization with the server."
    );

    addLog("");

    addLog("Program completed.");
}