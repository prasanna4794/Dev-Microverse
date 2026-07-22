"use client";

import { useState } from "react";

const Page = () => {
    const [output, setOutput] = useState(
        "Click Run Program to execute the code"
    );
    const runProgram = () => {

        const request =
            indexedDB.open("mydatabase", 1);
        request.onerror = () => {

            setOutput(
                "Database error"
            );
        };


        request.onupgradeneeded = (event) => {

            const db =
                event.target.result;
            if (
                !db.objectStoreNames
                    .contains("users")
            ) {

                db.createObjectStore(
                    "users",
                    {
                        keyPath: "id"
                    }
                );
            }
            if (
                !db.objectStoreNames
                    .contains("products")
            ) {

                db.createObjectStore(
                    "products",
                    {
                        keyPath: "id"
                    }
                );
            }
            setOutput(
                "Database upgraded successfully"
            );

        };


        request.onsuccess = (event) => {
            const db =
                event.target.result;
            console.log(db);

            setOutput(
                "Database created successfully"
            );
        };
    };


return (
    <div className="micro-piece-page">
        <div className="micro-piece-wrapper">
            <div className="micro-header">

                <div>
                    <span className="level-badge">
                        LEVEL 1
                    </span>

                    <h1>
                        01. indexedDB.open()
                    </h1>

                    <p>
                        Opening and upgrading database stores
                        via indexedDB.open()
                    </p>
                </div>

            </div>


            {/* MAIN LAYOUT */}

            <div className="micro-layout">


                {/* LEFT SIDE */}

                <aside className="details-panel">

                    <h2>
                        Question Details
                    </h2>


                    <div className="detail-item">

                        <span>
                            Primitive Name
                        </span>

                        <strong>
                            Browser & API Storage Mechanics
                        </strong>

                    </div>


                    <div className="detail-item">

                        <span>
                            Direct Parent Component
                        </span>

                        <strong>
                            IndexedDB API
                        </strong>

                    </div>


                    <div className="detail-item">

                        <span>
                            Owner's Level
                        </span>

                        <strong>
                            Browser API
                        </strong>

                    </div>


                    <div className="detail-item learn-item">

                        <span>
                            Primary Learn
                        </span>

                        <p>
                            Database create பண்ணுவது,
                            update பண்ணுவது.
                        </p>

                        <p>
                            Browser offline-ஆகவும்
                            work ஆகும்.
                        </p>

                    </div>


                    <div className="detail-item">

                        <span>
                            Functional Goal
                        </span>

                        <p>
                            indexedDB.open() மூலம்
                            database-ஐ open அல்லது
                            upgrade செய்கிறோம்.
                        </p>

                    </div>

                </aside>


                {/* RIGHT SIDE */}

                <main className="workspace-panel">


                    {/* CODE HEADER */}

                    <div className="workspace-header">

                        <h2>
                            Example Code
                        </h2>

                        <span>
                            JavaScript
                        </span>

                    </div>


                    {/* CODE */}

                    <div className="code-box">

                        <pre>
                            <code>{`const request =
indexedDB.open("mydatabase", 1);

request.onerror = function () {

    console.log("database error");

};

request.onupgradeneeded =
function (event) {

    const db =
        event.target.result;

    if (
        !db.objectStoreNames
            .contains("users")
    ) {

        db.createObjectStore(
            "users",
            {
                keyPath: "id"
            }
        );

    }

    if (
        !db.objectStoreNames
            .contains("products")
    ) {

        db.createObjectStore(
            "products",
            {
                keyPath: "id"
            }
        );

    }

};

request.onsuccess =
function (event) {

    const db =
        event.target.result;

    console.log(
        "database created successfully"
    );

};`}</code>
                        </pre>

                    </div>


                    {/* PREVIEW */}

                    <div className="preview-area">

                        <div className="preview-header">

                            <h2>
                                Live Preview
                            </h2>

                            <button
                                onClick={runProgram}
                            >
                                Run Program
                            </button>

                        </div>


                        <div className="output-box">

                            <span>
                                OUTPUT
                            </span>

                            <p>
                                {output}
                            </p>

                        </div>

                    </div>

                </main>

            </div>

        </div>

    </div>
);

};

export default Page;