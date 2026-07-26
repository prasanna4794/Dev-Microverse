export default async function runProgram(addLog) {

    function createPromise(name, delay) {

        return new Promise((resolve) => {

            setTimeout(() => {

                addLog(`${name} completed`);

                resolve(name);

            }, delay);

        });

    }

    addLog("Creating promises...");

    const promise1 = createPromise("Promise 1", 3000);

    const promise2 = createPromise("Promise 2", 1000);

    const promise3 = createPromise("Promise 3", 2000);

    addLog("");

    addLog("Running Promise.all()...");

    const allResult = await Promise.all([
        promise1,
        promise2,
        promise3
    ]);

    addLog(`Promise.all Result : ${allResult.join(", ")}`);

    addLog("");

    addLog("Creating new promises for Promise.race()...");

    const race1 = createPromise("Race 1", 3000);

    const race2 = createPromise("Race 2", 1000);

    const race3 = createPromise("Race 3", 2000);

    const raceResult = await Promise.race([
        race1,
        race2,
        race3
    ]);

    addLog(`Promise.race Winner : ${raceResult}`);
}