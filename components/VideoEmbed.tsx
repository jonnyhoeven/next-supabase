import React from "react";

export default function VideoEmbed({ src, title }) {
  return (
    <div>
      <div className="text-xl">{title}</div>
      <iframe
        className="rounded-xl shadow-xl w-full aspect-video"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
}
