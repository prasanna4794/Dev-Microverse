export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is AJAX in jQuery?");
    addLog("");

    addLog("Answer:");
    addLog("AJAX is used to communicate with the server without refreshing the page.");
    addLog("");

    addLog("Example:");

    addLog(`$.ajax({

    url: "/users",

    method: "GET",

    success: function(data){

        console.log(data);

    }

});`);

    addLog("");

    addLog("Explanation:");
    addLog("The request is sent to the server.");
    addLog("The server returns data.");
    addLog("The page is updated without reloading.");
    addLog("");

    addLog("Program completed.");

}