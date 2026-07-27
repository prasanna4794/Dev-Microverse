export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the difference between GET and POST?");
    addLog("");

    addLog("Answer:");
    addLog("GET is used to retrieve data from the server.");
    addLog("POST is used to send data to the server.");
    addLog("");

    addLog("Difference:");
    addLog("- GET fetches data.");
    addLog("- POST sends data.");
    addLog("");

    addLog("Example:");

    addLog(`<form method="GET">
    <input type="text" name="search">
    <button>Search</button>
</form>

<form method="POST">
    <input type="text" name="username">
    <button>Submit</button>
</form>`);

    addLog("");

    addLog("Explanation:");
    addLog("GET sends data in the URL and is commonly used for searching or reading data.");
    addLog("POST sends data in the request body and is commonly used for login, registration, and form submission.");
    addLog("");

    addLog("Program completed.");

}