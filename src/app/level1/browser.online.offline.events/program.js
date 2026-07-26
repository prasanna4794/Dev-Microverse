export default function runProgram(addLog) {

    addLog("Checking current network status...");

    if (navigator.onLine) {
        addLog("✔ Device is currently ONLINE");
    } else {
        addLog("❌ Device is currently OFFLINE");
    }

    addLog("Listening for network changes...");

    function handleOnline() {
        addLog("🟢 Online event triggered");
        addLog("✔ Internet connection restored");
    }

    function handleOffline() {
        addLog("🔴 Offline event triggered");
        addLog("❌ Internet connection lost");
    }

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    addLog("✔ Event listeners registered successfully");
}