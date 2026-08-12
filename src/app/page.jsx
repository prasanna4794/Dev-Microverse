"use client";

import Link from "next/link";

const topics = [

    { title: "HTML", path: "/html/absolute-relative-path-differ", icon: "🌐" },

    { title: "CSS", path: "/css/!important", icon: "🎨" },

    { title: "JavaScript", path: "/level1/Array.prototype.flat", icon: "⚡" },

    { title: "jQuery", path: "/jQuery/.addClass()-in-jQuery", icon: "💛" },

    { title: "React", path: "/react/What-is-React", icon: "⚛️" },

    { title: "Angular", path: "/angular/What-is-Angular", icon: "🅰️" },

    { title: "Python", path: "/python/What-is-Python", icon: "🐍" },

    { title: "SQL", path: "/sql/What-is-SQL", icon: "🗄️" },

    { title: "Data Structure", path: "/datastructure/What-is-Datastructure", icon: "🧩"},

    { title: "Express.js", path: "/expressjs/What-is-Express.js", icon: "🚂" },
    
    { title: "Node.js", path: "/nodejs/What-is-Node.js", icon: "🟢" },

     { title: "Level 2", path: "/level2/dynamic-input-element", icon: "🚀" },
];

export default function Page() {

    return (
        <div className="layout">

            <aside className="sidebar">

                <h2>Dev Microverse</h2>

                <ul>
                    {topics.map((t) => (
                        <li key={t.title}>
                            <Link href={t.path}>
                                <span>{t.icon}</span>
                                <span>{t.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

            </aside>

            <main className="main">

                <div className="hero">
                    <h1>Learn • Practice • Interview</h1>
                    <p>
                        Frontend roadmap with examples and interview questions.
                    </p>
                </div>

                <div className="grid">

                    {topics.map((t) => (
                        <div className="card" key={t.title}>

                            <div className="icon">
                                {t.icon}
                            </div>

                            <h3>{t.title}</h3>

                            <p>Open learning module</p>

                            <Link className="btn" href={t.path}>
                                Open
                            </Link>

                        </div>
                    ))}

                </div>

            </main>

        </div>
    );
}
