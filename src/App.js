import React, { useState } from "react";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import SearchBar from "./components/SearchBar";
import { COURSES } from "./data/courses.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filtered = COURSES.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.teacher.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1 className="brand">Course Platform by PSK</h1>
       {!selectedCourse ? (<SearchBar value={query} onChange={(v) => setQuery(v)} />):("")} 
      </header>

      <main className="main">
        {!selectedCourse ? (
          <CourseList
            courses={filtered}
            onSelect={(c) => setSelectedCourse(c)}
          />
        ) : (
          <CourseDetail
            course={selectedCourse}
            onBack={() => setSelectedCourse(null)}
            onSelectVideo={() => {}}
          />
        )}
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Course Platform by PSK</small>
      </footer>
    </div>
  );
}
