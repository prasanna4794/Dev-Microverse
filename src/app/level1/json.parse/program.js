export default function runProgram(addLog) {

    addLog("Creating JSON string...");

    const jsonString =
        '{"name":"Prasanna","age":27,"city":"Chennai"}';

    addLog("");

    addLog(`JSON String : ${jsonString}`);

    addLog("");

    addLog("Converting JSON string to JavaScript object...");

    const user = JSON.parse(jsonString);

    addLog("");

    addLog(`Name : ${user.name}`);

    addLog(`Age : ${user.age}`);

    addLog(`City : ${user.city}`);

    addLog("");

    addLog("Program completed.");

}