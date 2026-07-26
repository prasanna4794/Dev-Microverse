export default function runProgram(addLog) {

    addLog("Creating JavaScript object...");

    const user = {

        name: "Prasanna",

        age: 27,

        skills: [
            "React",
            "JavaScript"
        ]

    };


    addLog("");

    addLog("Original Object:");

    addLog(JSON.stringify(user, null, 2));


    addLog("");

    addLog("Converting object into JSON string...");


    const jsonString = JSON.stringify(user);


    addLog("");

    addLog("JSON String:");

    addLog(jsonString);


    addLog("");

    addLog(
        `Data Type: ${typeof jsonString}`
    );


    addLog("");

    addLog("Program completed.");

}