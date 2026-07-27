export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the alt attribute?");
    addLog("");

    addLog("Answer:");
    addLog("The alt attribute provides alternative text for an image.");
    addLog("If the image fails to load, the alt text is displayed.");
    addLog("It also improves accessibility for screen readers.");
    addLog("");

    addLog("Example:");

    addLog(`<img src="car.jpg" alt="Car Image">`);

    addLog("");

    addLog("Explanation:");
    addLog("If 'car.jpg' is not available, 'Car Image' will be shown.");
    addLog("Screen readers will also read the alt text for visually impaired users.");
    addLog("");

    addLog("Program completed.");

}