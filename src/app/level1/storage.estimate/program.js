export default async function runProgram(addLog) {

    addLog("Checking browser storage...");

    if (!navigator.storage) {
        addLog("Storage API is not supported.");
        return;
    }

    const estimate = await navigator.storage.estimate();

    addLog("Storage information received.");

    addLog(`Used Storage : ${estimate.usage} bytes`);

    addLog(`Available Quota : ${estimate.quota} bytes`);

    const usedMB = (estimate.usage / 1024 / 1024).toFixed(2);

    const quotaMB = (estimate.quota / 1024 / 1024).toFixed(2);

    addLog(`Used Storage : ${usedMB} MB`);

    addLog(`Available Quota : ${quotaMB} MB`);

    addLog("Program completed.");
}