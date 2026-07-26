"use client";

import { useState } from "react";
import metadata from "./metadata";
import runProgram from "./program";

export default function Page() {

    const [logs, setLogs] = useState([]);

    function addLog(message) {
        console.log(message);

        setLogs((previousLogs) => [
            ...previousLogs,
            message
        ]);
    }

    async function handleRunProgram() {
        setLogs([]);
        await runProgram(addLog);
    }

    return (
        <main className="micro-page">

            <h1>{metadata.primitiveName}</h1>

            <hr />

            <button
                className="run-button"
                onClick={handleRunProgram}
            >
                Run Program
            </button>

            <hr />

            <h2>Execution Log</h2>

            <pre
                style={{
                    background: "#111",
                    color: "#00ff00",
                    padding: "15px",
                    minHeight: "180px",
                    whiteSpace: "pre-wrap"
                }}
            >
                {
                    logs.length === 0
                        ? "Waiting..."
                        : logs.join("\n")
                }
            </pre>

        </main>
    );
}