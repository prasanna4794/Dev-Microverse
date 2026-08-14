export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Media-to-Base64/Blob Converter?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Media-to-Base64/Blob Converter is a utility that converts media files such as images, audio, and video between Base64 strings and Blob objects."
    );

    addLog("");

    addLog("Blob:");

    addLog(
        "Blob represents binary file data in the browser."
    );

    addLog("");

    addLog("Base64:");

    addLog(
        "Base64 represents binary data as a string."
    );

    addLog("");

    addLog("File → Base64:");

    addLog(
        "reader.readAsDataURL(file);"
    );

    addLog("");

    addLog("Blob → Object URL:");

    addLog(
        "URL.createObjectURL(blob);"
    );

    addLog("");

    addLog("Release Object URL:");

    addLog(
        "URL.revokeObjectURL(url);"
    );

    addLog("");

    addLog("Conversion Flow:");

    addLog("Media File");

    addLog("    ↓");

    addLog("Converter Utility");

    addLog("    ↓");

    addLog("Base64 / Blob");

    addLog("    ↓");

    addLog("Preview / Storage / Upload");

    addLog("");

    addLog("Example:");

    addLog(
        "const previewUrl = URL.createObjectURL(file);"
    );

    addLog("");

    addLog("Important:");

    addLog(
        "Blob is useful for binary file handling, while Base64 represents the same data as a text string."
    );

    addLog("");

    addLog("Program completed.");
}