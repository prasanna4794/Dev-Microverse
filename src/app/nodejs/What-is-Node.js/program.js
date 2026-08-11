export default function runProgram(addLog) {

    addLog("Creating students array...");

    const students = [
        {
            name: "Arun",
            section: "A"
        },
        {
            name: "Bala",
            section: "A"
        },
        {
            name: "John",
            section: "B"
        },
        {
            name: "Ram",
            section: "C"
        }
    ];

    addLog("Grouping students by section...");

    const groupedStudents = students.reduce((result, student) => {

        if (!result[student.section]) {
            result[student.section] = [];
        }

        result[student.section].push(student.name);

        return result;

    }, {});

    addLog("");

    addLog("Grouped Result:");

    addLog(JSON.stringify(groupedStudents, null, 2));

    addLog("");

    addLog("Program completed.");

}