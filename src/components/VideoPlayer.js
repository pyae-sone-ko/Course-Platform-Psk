import React from "react";

export default function VideoPlayer({ video }) {
  return (
    <div className="video-player card-rounded">
      <div className="iframe-wrap">
        <iframe
          title={video.title}
          src={video.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="player-title">{video.title}</div>
    </div>
  );
}
