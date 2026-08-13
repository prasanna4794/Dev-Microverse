export default function runProgram(addLog) {

    addLog("Question:");
    addLog(
        "What is a Connection Drop Error Banner Overlay?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Connection Drop Error Banner Overlay is a reusable UI component that displays a warning when the user's internet connection is unavailable."
    );

    addLog("");

    addLog("Check Connection:");

    addLog(
        "navigator.onLine"
    );

    addLog("");

    addLog("Offline Event:");

    addLog(
        'window.addEventListener("offline", handleOffline);'
    );

    addLog("");

    addLog("Online Event:");

    addLog(
        'window.addEventListener("online", handleOnline);'
    );

    addLog("");

    addLog("Offline Flow:");

    addLog("Internet disconnected");
    addLog("       ↓");
    addLog("offline event");
    addLog("       ↓");
    addLog("Update React state");
    addLog("       ↓");
    addLog("Show Error Banner");

    addLog("");

    addLog("Online Flow:");

    addLog("Internet restored");
    addLog("       ↓");
    addLog("online event");
    addLog("       ↓");
    addLog("Update React state");
    addLog("       ↓");
    addLog("Hide Banner");

    addLog("");

    addLog("Example Message:");

    addLog(
        "⚠ No internet connection. Your changes will be saved locally."
    );

    addLog("");

    addLog("Important:");

    addLog(
        "navigator.onLine provides the browser's current online/offline indication, while online and offline events allow the UI to react to connection changes."
    );

    addLog("");

    addLog("Program completed.");
}