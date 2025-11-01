import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { FaArrowLeft } from "react-icons/fa";

export default function CourseDetail({ course, onBack }) {
  const [active, setActive] = useState(course.videos[0]);

  return (
    <div className="course-detail">
      <button className="back-btn" onClick={onBack}><FaArrowLeft /> Back to courses</button>

      <div className="player-wrap">
        <div className="left">
          <VideoPlayer video={active} />
          <div className="video-info card-rounded">
            <h2>{active.title}</h2>
            <p className="small-meta">Part of: <strong>{course.title}</strong> • {active.length}</p>
            <p>{course.description}</p>
            <ul className="bullets">
              {course.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="right">
          <div className="playlist card-rounded">
            <h3>Course Videos</h3>
            {course.videos.map((v) => (
              <div
                key={v.id}
                className={`playlist-item ${v.id === active.id ? "active" : ""}`}
                onClick={() => setActive(v)}
                title={v.title}
              >
                <div className="thumb">
                  <img
                    src={`https://img.youtube.com/vi/${extractYouTubeId(v.url)}/mqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                  />
                </div>
                <div className="meta">
                  <div className="title">{v.title}</div>
                  <div className="len">{v.length}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function extractYouTubeId(embedUrl) {
  // expected: https://www.youtube.com/embed/<id>
  return embedUrl.split("/").pop();
}
