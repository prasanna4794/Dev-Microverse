export default function runProgram(addLog) {
    addLog("Opening database...");
    const request = indexedDB.open("mydatabase", 1);
    request.onerror = () => {
        addLog("❌ Database error");
    };

    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        addLog("Database upgrade started...");
        if (!db.objectStoreNames.contains("users")) {
            db.createObjectStore("users", {
                keyPath: "id"
            });
            addLog("✔ users object store created");
        }

        if (!db.objectStoreNames.contains("products")) {
            db.createObjectStore("products", {
                keyPath: "id"
            });
            addLog("✔ products object store created");
        }
        addLog("✔ Database upgraded successfully");
    };

    request.onsuccess = (event) => {
        const db = event.target.result;
        console.log(db);
        addLog("✔ Database opened successfully");
    };
}