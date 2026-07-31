"use client";
import Link from "next/link";
const topics = [
    { title: "HTML", path: "/html/absolute-relative-path-differ", icon: "🌐" },
    { title: "CSS", path: "/css/!important", icon: "🎨" },
    { title: "JavaScript", path: "/level1/Array.prototype.flat", icon: "⚡" },
    { title: "jQuery", path: "/jQuery/.addClass()-in-jQuery", icon: "💛" },
    { title: "React", path: "#", icon: "⚛️" },
    { title: "Next.js", path: "#", icon: "▲" },
];
export default function Page() {
    return <div className="layout">
        <aside className="sidebar">
            <h2>Dev Microverse</h2>
            <ul>{topics.map(t => <li key={t.title}>{t.icon} {t.title}</li>)}</ul>
        </aside>
        <main className="main">
            <div className="hero">
                <h1>Learn • Practice • Interview</h1>
                <p>Frontend roadmap with examples and interview questions.</p>
            </div>
            <div className="grid">
                {topics.map(t => <div className="card" key={t.title}>
                    <div className="icon">{t.icon}</div>
                    <h3>{t.title}</h3>
                    <p>Open learning module</p>
                    <Link className="btn" href={t.path}>Open</Link>
                </div>)}
            </div>
        </main>
    </div>
}
