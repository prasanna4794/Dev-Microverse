export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between HTML and HTML5?");
    addLog("");

    addLog("Answer:");
    addLog("HTML is the older version used to create web page structure.");
    addLog("HTML5 is the latest version with many new features.");
    addLog("");

    addLog("HTML5 New Features:");
    addLog("- <video> element");
    addLog("- <audio> element");
    addLog("- Semantic tags");
    addLog("- Canvas");
    addLog("- Local Storage");
    addLog("- Geolocation API");
    addLog("");

    addLog("Example:");

    addLog(`<video width="300" controls>
    <source src="movie.mp4" type="video/mp4">
</video>`);

    addLog("");

    addLog("Explanation:");
    addLog("HTML required plugins to play videos.");
    addLog("HTML5 can play video directly using the <video> element.");
    addLog("");

    addLog("Program completed.");

}