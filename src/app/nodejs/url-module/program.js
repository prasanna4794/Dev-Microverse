export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the url module in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "The url module is a built-in Node.js module used to parse and work with URLs."
    );

    addLog("");

    addLog("Import URL:");

    addLog('const { URL } = require("url");');

    addLog("");

    addLog("Create URL:");

    addLog(
        'const myUrl = new URL("https://example.com/products?id=10");'
    );

    addLog("");

    addLog("Hostname:");

    addLog("myUrl.hostname");

    addLog("");

    addLog("Output:");
    addLog("example.com");

    addLog("");

    addLog("Pathname:");

    addLog("myUrl.pathname");

    addLog("");

    addLog("Output:");
    addLog("/products");

    addLog("");

    addLog("Search:");

    addLog("myUrl.search");

    addLog("");

    addLog("Output:");
    addLog("?id=10");

    addLog("");

    addLog("Important:");
    addLog("url → URL handling and parsing");

    addLog("");

    addLog("Program completed.");
}