export default function runProgram(addLog) {


    addLog("Starting Type Casting demo...");


    const stringNumber = "500";


    addLog("");

    addLog(
        `Original Value: ${stringNumber}`
    );


    addLog(
        `Original Type: ${typeof stringNumber}`
    );


    const convertedNumber =
        Number(stringNumber);


    addLog("");

    addLog(
        `After Number(): ${convertedNumber}`
    );


    addLog(
        `New Type: ${typeof convertedNumber}`
    );


    const numberValue = 100;


    const convertedString =
        String(numberValue);


    addLog("");

    addLog(
        `After String(): ${convertedString}`
    );


    addLog(
        `New Type: ${typeof convertedString}`
    );


    const booleanValue =
        Boolean("Hello");


    addLog("");

    addLog(
        `Boolean Result: ${booleanValue}`
    );


    addLog(
        `Boolean Type: ${typeof booleanValue}`
    );


    addLog("");

    addLog("Program completed.");

}