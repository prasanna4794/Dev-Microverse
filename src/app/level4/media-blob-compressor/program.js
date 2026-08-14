export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Media Blob Compressor & Local Stager?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "It is a utility that compresses and optimizes media files before storing them temporarily in local browser storage."
    );

    addLog("");

    addLog("Original File:");

    addLog(
        "Image = 5 MB"
    );

    addLog("");

    addLog("Compression:");

    addLog(
        "Resize the image and reduce image quality."
    );

    addLog("");

    addLog("Compressed File:");

    addLog(
        "Image = approximately 1 MB"
    );

    addLog("");

    addLog("Blob:");

    addLog(
        "Blob represents binary data such as images and other media files."
    );

    addLog("");

    addLog("Local Staging:");

    addLog(
        "The compressed Blob is temporarily stored locally before server synchronization."
    );

    addLog("");

    addLog("Flow:");

    addLog("User Upload");

    addLog("      ↓");

    addLog("Image File");

    addLog("      ↓");

    addLog("Compress / Resize");

    addLog("      ↓");

    addLog("Create Blob");

    addLog("      ↓");

    addLog("Local Staging");

    addLog("      ↓");

    addLog("IndexedDB");

    addLog("      ↓");

    addLog("Network Available");

    addLog("      ↓");

    addLog("Server Sync");

    addLog("");

    addLog("Important:");

    addLog(
        "Compression reduces storage and network usage while local staging allows media to be safely kept until synchronization is possible."
    );

    addLog("");

    addLog("Program completed.");
}