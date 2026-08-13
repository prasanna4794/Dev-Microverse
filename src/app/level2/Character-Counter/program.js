export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is a Field Character Counter Badge?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "A Field Character Counter Badge is a reusable UI component that displays the number of characters entered in a form field and optionally shows the maximum character limit."
    );

    addLog("");

    addLog("Example:");

    addLog(
        '<textarea maxLength={100} />'
    );

    addLog("");

    addLog("Character Count:");

    addLog(
        "text.length"
    );

    addLog("");

    addLog("React State:");

    addLog(
        'const [text, setText] = useState("");'
    );

    addLog("");

    addLog("Update Text:");

    addLog(
        "onChange={(e) => setText(e.target.value)}"
    );

    addLog("");

    addLog("Display Counter:");

    addLog(
        "{text.length} / {maxLength}"
    );

    addLog("");

    addLog("Flow:");

    addLog("User types text");
    addLog("      ↓");
    addLog("onChange event");
    addLog("      ↓");
    addLog("Update state");
    addLog("      ↓");
    addLog("text.length");
    addLog("      ↓");
    addLog("Display character count");

    addLog("");

    addLog("Important:");

    addLog(
        "Character counters help users understand how much text they can enter into a field."
    );

    addLog("");

    addLog("Program completed.");
}