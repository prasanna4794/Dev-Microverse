export default function runProgram(addLog) {

    addLog("Question:");

    addLog(
        "What is an IndexedDB Wrapper?"
    );

    addLog("");

    addLog("Answer:");

    addLog(
        "An IndexedDB Wrapper is a reusable JavaScript utility that simplifies IndexedDB operations by providing Promise-based CRUD functions."
    );

    addLog("");

    addLog("CRUD:");

    addLog("C - Create");
    addLog("R - Read");
    addLog("U - Update");
    addLog("D - Delete");

    addLog("");

    addLog("Create:");

    addLog(
        'await db.add("users", user);'
    );

    addLog("");

    addLog("Read:");

    addLog(
        'const user = await db.get("users", 1);'
    );

    addLog("");

    addLog("Update:");

    addLog(
        'await db.update("users", user);'
    );

    addLog("");

    addLog("Delete:");

    addLog(
        'await db.remove("users", 1);'
    );

    addLog("");

    addLog("Promise Flow:");

    addLog("IndexedDB Request");
    addLog("      ↓");
    addLog("Promise");
    addLog("      ↓");
    addLog("resolve / reject");
    addLog("      ↓");
    addLog("async / await");
    addLog("      ↓");
    addLog("Result");

    addLog("");

    addLog("CRUD Flow:");

    addLog("Create");
    addLog("   ↓");
    addLog("Read");
    addLog("   ↓");
    addLog("Update");
    addLog("   ↓");
    addLog("Delete");

    addLog("");

    addLog("Important:");

    addLog(
        "An IndexedDB Wrapper hides the complex IndexedDB event handling and provides simpler Promise-based functions."
    );

    addLog("");

    addLog("Program completed.");
}