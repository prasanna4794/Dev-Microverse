"use client";

import { useState } from "react";
import metadata from "./metadata";
import runProgram from "./program";

export default function Page() {

    const [logs, setLogs] = useState([]);
    const [previewUrl, setPreviewUrl] = useState("");

    function addLog(message) {
        console.log(message);
        setLogs((previousLogs) => [
            ...previousLogs,
            message
        ]);
    }

    function handleRunProgram() {
        setLogs([]);
        setPreviewUrl("");
        addLog("Click 'Choose File' to select a file.");
    }

    function handleFileChange(event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        runProgram(file, addLog, setPreviewUrl);
    }

    return (
        <main className="micro-page">

            <h1>{metadata.primitiveName}</h1>

            <hr />

            <p>
                <strong>ID :</strong> {metadata.id}
            </p>

            <p>
                <strong>Level :</strong> {metadata.level}
            </p>

            <p>
                <strong>Direct Parent :</strong>{" "}
                {metadata.directParentComponent}
            </p>

            <p>
                <strong>Owner's Level :</strong>{" "}
                {metadata.ownersLevel}
            </p>

            <p>
                <strong>Functional Goal :</strong>{" "}
                {metadata.functionalGoal}
            </p>

            <h3>Primary Learn</h3>

            <ul>
                {
                    metadata.primaryLearn.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>

            <hr />

            <button
                className="run-button"
                onClick={handleRunProgram}
            >
                Run Program
            </button>

            <br />
            <br />

            <input
                type="file"
                onChange={handleFileChange}
            />

            <hr />

            {
                previewUrl && (
                    <>
                        <h3>Preview</h3>

                        <img
                            src={previewUrl}
                            alt="Preview"
                            style={{
                                maxWidth: "300px",
                                border: "1px solid gray"
                            }}
                        />
                    </>
                )
            }

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