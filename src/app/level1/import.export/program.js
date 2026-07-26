import { greet, add } from "./helper";

export default function runProgram(addLog) {

    addLog("Program started.");

    greet(addLog);

    const result = add(10, 20);

    addLog(`10 + 20 = ${result}`);

    addLog("Program completed.");

}