export default function runProgram(addLog) {

    addLog("Question:");
    addLog("How do you create a table?");
    addLog("");

    addLog("Answer:");
    addLog("A table is created using the <table> element.");
    addLog("Rows are created using <tr>.");
    addLog("Header cells are created using <th>.");
    addLog("Data cells are created using <td>.");
    addLog("");

    addLog("Example:");

    addLog(`<table border="1">

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>John</td>
        <td>25</td>
    </tr>

</table>`);

    addLog("");

    addLog("Output:");
    addLog("+------+-----+");
    addLog("| Name | Age |");
    addLog("+------+-----+");
    addLog("| John | 25  |");
    addLog("+------+-----+");
    addLog("");

    addLog("Explanation:");
    addLog("<table> creates the table.");
    addLog("<tr> creates a table row.");
    addLog("<th> creates a header cell.");
    addLog("<td> creates a data cell.");
    addLog("");

    addLog("Program completed.");

}