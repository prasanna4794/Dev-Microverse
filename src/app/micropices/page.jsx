"use client";

import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

const Page = () => {
    const [inputType, setInputType] = useState("");

    const createInput = (type) => {
        setInputType(type);
    };

    return (
        <div className="micropices-page">
            <Row className="g-4">
                <Col sm={12} md={6} lg={4}>
                    <div className="question-card">
                        <h2>
                            1. Dynamic Input Element (Text, Number, Email wrappers)
                        </h2>
                        <div className="answer-box">
                            <p>
                                dynamic input element na namaku thevayana input ah dyanamic ah kontu varuvathu
                            </p>
                        </div>
                        <div className="code-box">
                            <h3>
                                Example Code
                            </h3>
                            <pre>
                                <code>{`function createInput(type) {
const input =
document.createElement("input");
input.type = type;
return input;
}`}
                                </code>
                            </pre>
                        </div>
                        <div className="preview-box">
                            <h3>
                                Preview
                            </h3>
                            <div className="preview-buttons">
                                <Button
                                    className="preview-btn"
                                    size="sm"
                                    onClick={() => createInput("text")}
                                >
                                    Text
                                </Button>

                                <Button
                                    className="preview-btn"
                                    size="sm"
                                    onClick={() => createInput("number")}
                                >
                                    Number
                                </Button>

                                <Button
                                    className="preview-btn"
                                    size="sm"
                                    onClick={() => createInput("email")}
                                >
                                    Email
                                </Button>
                            </div>
                            {inputType && (
                                <Form.Control
                                    className="mt-3"
                                    type={inputType}
                                    placeholder={`Enter ${inputType}`}
                                />
                            )}
                        </div>
                    </div>
                </Col>


            </Row>
        </div>
    );
};

export default Page;