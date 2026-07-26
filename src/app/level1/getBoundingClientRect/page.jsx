"use client";

import { useRef, useState } from "react";
import metadata from "./metadata";
import runProgram from "./program";

export default function Page() {

    const [logs, setLogs] = useState([]);
    const boxRef = useRef(null);

    function addLog(message) {
        console.log(message);
        setLogs((previousLogs) => [
            ...previousLogs,
            message
        ]);
    }

    function handleRunProgram() {
        setLogs([]);
        runProgram(boxRef.current, addLog);
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

            <div
                ref={boxRef}
                style={{
                    width: "200px",
                    height: "120px",
                    background: "royalblue",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px"
                }}
            >
                Demo Box
            </div>

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