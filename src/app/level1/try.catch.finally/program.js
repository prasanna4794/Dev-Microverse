export default function runProgram(addLog) {

    addLog("Program started.");

    try {

        addLog("Inside try block.");

        const user = null;

        addLog("Accessing user name...");

        console.log(user.name);

        addLog("This line will not execute.");

    } catch (error) {

        addLog("Error caught successfully.");

        addLog(`Error Message : ${error.message}`);

    } finally {

        addLog("Finally block executed.");

    }

    addLog("Program completed.");

}