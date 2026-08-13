export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Form Section Tab Navigator?");
    addLog("");

    addLog("Answer:");

    addLog(
        "A Form Section Tab Navigator is a reusable component that divides a large form into multiple sections and allows users to navigate between them using tabs."
    );

    addLog("");

    addLog("Example Tabs:");

    addLog("Personal");
    addLog("Address");
    addLog("Education");
    addLog("Documents");

    addLog("");

    addLog("Active Tab State:");

    addLog(
        'const [activeTab, setActiveTab] = useState("personal");'
    );

    addLog("");

    addLog("Change Tab:");

    addLog(
        'setActiveTab("address");'
    );

    addLog("");

    addLog("Conditional Rendering:");

    addLog(
        '{activeTab === "personal" && ('
    );

    addLog(
        "    <PersonalForm />"
    );

    addLog(")}");

    addLog("");

    addLog("Flow:");

    addLog("User clicks Tab");
    addLog("       ↓");
    addLog("activeTab changes");
    addLog("       ↓");
    addLog("Condition checked");
    addLog("       ↓");
    addLog("Selected section displayed");

    addLog("");

    addLog("Important:");

    addLog(
        "Tabs help organize large forms into smaller and easier-to-manage sections."
    );

    addLog("");

    addLog("Program completed.");
}