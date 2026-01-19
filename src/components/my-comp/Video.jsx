import React from "react";

function Video({ video, name,title,titlestyle,paragraph,paragraphstyle,bgstyle,videostyle}) {
  return (
    <div className={`hover:-translate-y-4 duration-300 ${bgstyle}`}>
      <div className={`${videostyle}`}>
        <video
          loop
          autoPlay
          muted
          playsInline
          className="object-cover w-full h-full rounded-2xl"
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <span className="flex justify-center py-2 font-semibold text-xs lg:text-2xl">{name}</span>
      <h2 className={`${titlestyle}`}>{title}</h2>
      <p className={`${paragraphstyle}`}>{paragraph}</p>
    </div>
  );
}

export default Video;
