export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a File/Image Upload Canvas Zone?");
    addLog("");

    addLog("Answer:");

    addLog(
        "A File/Image Upload Canvas Zone is a reusable component that allows users to select or drag and drop files or images into a specific area."
    );

    addLog("");

    addLog("Basic File Input:");

    addLog('<input type="file" />');

    addLog("");

    addLog("Image Input:");

    addLog(
        '<input type="file" accept="image/*" />'
    );

    addLog("");

    addLog("Handle Selected File:");

    addLog("const handleFile = (event) => {");

    addLog(
        "    const file = event.target.files[0];"
    );

    addLog(
        "    console.log(file);"
    );

    addLog("};");

    addLog("");

    addLog("Image Preview:");

    addLog(
        "URL.createObjectURL(file)"
    );

    addLog("");

    addLog("File Validation:");

    addLog(
        'if (!file.type.startsWith("image/")) {'
    );

    addLog(
        '    alert("Please select an image");'
    );

    addLog("}");

    addLog("");

    addLog("Flow:");

    addLog("Select / Drag File");
    addLog("       ↓");
    addLog("File Object");
    addLog("       ↓");
    addLog("Validate File");
    addLog("       ↓");
    addLog("Preview");
    addLog("       ↓");
    addLog("Upload");

    addLog("");

    addLog("Important:");

    addLog(
        "URL.createObjectURL() can create a temporary URL for previewing a selected file."
    );

    addLog("");

    addLog("Program completed.");
}