export default function runProgram(element, addLog) {

    addLog("Finding element position...");

    const rect = element.getBoundingClientRect();

    addLog(`Top : ${rect.top}px`);
    addLog(`Left : ${rect.left}px`);
    addLog(`Width : ${rect.width}px`);
    addLog(`Height : ${rect.height}px`);
    addLog(`Right : ${rect.right}px`);
    addLog(`Bottom : ${rect.bottom}px`);

    addLog("Layout measurement completed.");
}