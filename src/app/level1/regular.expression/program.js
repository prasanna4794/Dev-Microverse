export default function runProgram(addLog) {

    addLog("Creating text...");

    const text = "Hello Prasanna";

    addLog(`Text : ${text}`);

    addLog("");

    const helloPattern = /Hello/;

    addLog("Checking for 'Hello'...");

    addLog(`Result : ${helloPattern.test(text)}`);

    addLog("");

    const worldPattern = /World/;

    addLog("Checking for 'World'...");

    addLog(`Result : ${worldPattern.test(text)}`);

    addLog("");

    const email = "prasanna@gmail.com";

    const emailPattern = /@/;

    addLog("Checking email contains '@'...");

    addLog(`Result : ${emailPattern.test(email)}`);

    addLog("");

    addLog("Program completed.");

}