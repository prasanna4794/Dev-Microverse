export default function runProgram(addLog) {

    addLog("Creating fruits array...");

    const fruits = [
        "Apple",
        "Orange",
        "Mango",
        "Grapes"
    ];

    addLog("");

    addLog("Checking using indexOf()...");

    const orangeIndex = fruits.indexOf("Orange");

    addLog(`Orange Index : ${orangeIndex}`);

    const bananaIndex = fruits.indexOf("Banana");

    addLog(`Banana Index : ${bananaIndex}`);

    addLog("");

    addLog("Checking using includes()...");

    addLog(`Contains Mango : ${fruits.includes("Mango")}`);

    addLog(`Contains Banana : ${fruits.includes("Banana")}`);

    addLog("");

    addLog("Program completed.");

}