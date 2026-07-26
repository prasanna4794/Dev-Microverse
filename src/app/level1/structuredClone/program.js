export default function runProgram(addLog) {

    addLog("Creating original object...");

    const student = {

        name: "Prasanna",

        address: {

            city: "Chennai"

        }

    };

    addLog(`Original City : ${student.address.city}`);

    addLog("");

    addLog("Creating deep clone using structuredClone()...");

    const clonedStudent = structuredClone(student);

    addLog("Updating cloned object city to Madurai...");

    clonedStudent.address.city = "Madurai";

    addLog("");

    addLog(`Original City : ${student.address.city}`);

    addLog(`Cloned City : ${clonedStudent.address.city}`);

    addLog("");

    addLog("Deep clone completed successfully.");

}