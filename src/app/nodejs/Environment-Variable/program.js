export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is an environment variable?");
    addLog("");

    addLog("Answer:");
    addLog(
        "An environment variable is a value stored outside the application code and used to provide configuration or runtime information."
    );

    addLog("");

    addLog("Example:");

    addLog("PORT=3000");
    addLog("NODE_ENV=development");

    addLog("");

    addLog("Node.js:");

    addLog("console.log(process.env.PORT);");
    addLog("console.log(process.env.NODE_ENV);");

    addLog("");

    addLog("Important:");
    addLog("process.env → Used to access environment variables in Node.js.");

    addLog("");

    addLog("Common Uses:");
    addLog("Application configuration");
    addLog("Port numbers");
    addLog("Database configuration");
    addLog("API URLs");
    addLog("Development and production settings");

    addLog("");

    addLog("Program completed.");
}