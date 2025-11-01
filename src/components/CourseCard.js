import React from "react";

export default function CourseCard({ course, onClick }) {
  return (
    <div
      className="card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      title={`${course.title} • ${course.teacher}`}
    >
      <div className="card-img-wrap">
        <img
          src={course.image}
          alt={course.title}
          className="card-img"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-teacher">By {course.teacher}</p>
        <p className="card-short">{course.short}</p>
      </div>
    </div>
  );
}
