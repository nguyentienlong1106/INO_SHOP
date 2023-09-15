"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

function VideoContainer({ data }: { data: string }) {
  const [isPlaying, SetPlaying] = useState(false);
  const tl = gsap.timeline({ delay: 0.3 });

  useEffect(() => {
    if (isPlaying) {
      tl.fromTo("#videoName", { y: 0, opacity: 1 }, { y: -20, opacity: 0 });
    } else {
      tl.fromTo("#videoName", { y: -20, opacity: 0 }, { y: 0, opacity: 1 });
    }
  }, [isPlaying, data, tl]);
  return (
    <div
      className="relative w-full h-[480px] rounded-[16px]"
      id="videoContainer"
    >
      <video
        onPlay={() => SetPlaying(true)}
        onPause={() => SetPlaying(false)}
        className=" min-w-full min-h-full w-auto h-auto bg-cover rounded-[16px]"
        controls
        src={data}
        id="mainVideo"
      ></video>
      <div
        className="absolute top-0 left-0 z-10 w-full h-[40px] p-2
            bg-gradient-to-b from-black to-transparent rounded-[16px]
        "
        id="videoName"
      >
        <button className="absolute top-[10rem] right-[22rem] z-0">
          <Image src="/play.png" alt="" width={120} height={120} />
        </button>
      </div>
    </div>
  );
}

export default VideoContainer;
