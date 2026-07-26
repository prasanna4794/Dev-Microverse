export default function runProgram(addLog) {

    addLog("Creating number values...");

    const amount = 1000000;

    const price = 25000;

    const percentage = 0.856;


    addLog("");

    addLog("Number Formatting:");

    addLog(
        amount.toLocaleString("en-IN")
    );


    addLog("");

    addLog("Currency Formatting:");

    addLog(
        price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR"
        })
    );


    addLog("");

    addLog("Percentage Formatting:");

    addLog(
        `${(percentage * 100).toFixed(1)}%`
    );


    addLog("");

    addLog("Program completed.");

}