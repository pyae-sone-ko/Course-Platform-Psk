import React, { useEffect, useRef, useState } from "react";
import CourseCard from "./CourseCard";

export default function CourseList({ courses, onSelect }) {
  const pageSize = 6;
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const containerRef = useRef();

  useEffect(() => {
    setVisibleCount(pageSize); // reset when courses filter changes
  }, [courses.length]);

  useEffect(() => {
    const sentinel = document.getElementById("load-more-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // load next page
            setVisibleCount((v) => Math.min(courses.length, v + pageSize));
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.1 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, [courses.length]);

  return (
    <div className="course-list" ref={containerRef}>
      <h2 className="section-title">Courses</h2>
      <div className="grid">
        {courses.slice(0, visibleCount).map((c) => (
          <CourseCard key={c.id} course={c} onClick={() => onSelect(c)} />
        ))}
      </div>

      <div className="sentinel-wrap">
        {visibleCount < courses.length ? (
          <div id="load-more-sentinel" className="sentinel">
            Loading more...
          </div>
        ) : (
          <div className="end">No more courses</div>
        )}
      </div>
    </div>
  );
}
