export default function runProgram(addLog) {

    addLog("Program started.");

    addLog("Starting setTimeout...");

    setTimeout(() => {

        addLog("✔ setTimeout executed after 3 seconds.");

    }, 3000);

    addLog("Starting setInterval...");

    let count = 0;

    const intervalId = setInterval(() => {

        count++;

        addLog(`Interval Count : ${count}`);

        if (count === 5) {

            clearInterval(intervalId);

            addLog("✔ Interval stopped.");

        }

    }, 1000);

}