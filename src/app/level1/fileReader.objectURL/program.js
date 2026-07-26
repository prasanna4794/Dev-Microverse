export default function runProgram(
    file,
    addLog,
    setPreviewUrl
) {

    addLog("File selected successfully.");

    addLog(`File Name : ${file.name}`);

    addLog(`File Type : ${file.type}`);

    addLog(`File Size : ${file.size} bytes`);

    addLog("Creating FileReader...");

    const reader = new FileReader();

    reader.onload = function () {

        addLog("✔ FileReader finished reading the file.");

        addLog("Creating Object URL...");

        const objectURL = URL.createObjectURL(file);

        setPreviewUrl(objectURL);

        addLog("✔ Object URL created successfully.");

        addLog(objectURL);
    };

    reader.onerror = function () {
        addLog("❌ Error while reading file.");
    };

    reader.readAsArrayBuffer(file);
}