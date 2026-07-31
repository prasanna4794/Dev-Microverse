export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Props in React?");
    addLog("");

    addLog("Answer:");
    addLog("Props are used to pass data from a Parent Component to a Child Component.");
    addLog("");

    addLog("Example:");

    addLog(`function App() {

    return <Student name="Prasanna" />;

}

function Student(props) {

    return <h1>{props.name}</h1>;

}`);

    addLog("");

    addLog("Output:");
    addLog("Prasanna");

    addLog("");

    addLog("Program completed.");

}