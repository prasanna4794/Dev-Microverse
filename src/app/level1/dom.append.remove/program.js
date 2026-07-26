export default function runProgram(addLog) {

    addLog("Creating parent element...");

    const container =
        document.createElement("div");


    container.id = "demo-box";


    addLog("Creating child element...");


    const paragraph =
        document.createElement("p");


    paragraph.textContent =
        "Hello from DOM";


    addLog("Appending child element...");


    container.appendChild(paragraph);


    document.body.appendChild(container);


    addLog(
        "✔ Child element added to page"
    );


    addLog("");


    addLog(
        "Removing child element..."
    );


    container.removeChild(paragraph);


    addLog(
        "✔ Child element removed"
    );


    addLog("");

    addLog(
        "Program completed."
    );

}