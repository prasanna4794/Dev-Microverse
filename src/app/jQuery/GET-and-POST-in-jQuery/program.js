export default function runProgram(addLog) {

    addLog("Question:");
    addLog("Difference between GET and POST?");
    addLog("");

    addLog("GET:");
    addLog("- Used to fetch data from the server.");
    addLog("");

    addLog("POST:");
    addLog("- Used to send data to the server.");
    addLog("");

    addLog("GET Example:");

    addLog(`$.ajax({

    url: "/users",

    method: "GET"

});`);

    addLog("");

    addLog("POST Example:");

    addLog(`$.ajax({

    url: "/users",

    method: "POST",

    data: {

        name: "Prasanna"

    }

});`);

    addLog("");

    addLog("Program completed.");

}