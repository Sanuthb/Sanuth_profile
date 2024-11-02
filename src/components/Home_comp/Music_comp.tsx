"use client";
import {
  AudioLines,
  X,
  SkipBack,
  SkipForward,
  CirclePlay,
  CirclePause,
} from "lucide-react";
import React from "react";

const Music_comp = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [musicbtn, setmusicbtn] = React.useState(false);
  const [ismusicplaying, setismusicplaying] = React.useState(false);
  const musicarray = ["music.mp3", "music2.mp3","music3.mp3","music4.mp3"];
  const [music, setmusic] = React.useState(0);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setismusicplaying(!ismusicplaying);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setismusicplaying(!ismusicplaying);
    }
  };

  const toggleMusic = () => {
    setmusicbtn(!musicbtn);
  };

  const nextMusic = () => {
    stopAudio();
    setmusic((prev) => (prev + 1) % musicarray.length);
  };

  const prevMusic = () => {
    stopAudio();
    setmusic((prev) => (prev - 1 + musicarray.length) % musicarray.length);
  };

  return (
    <div className="flex">
      <audio ref={audioRef} src={`/${musicarray[music]}`} />
      <button
        className={`text-white bg-red-600 rounded-full w-12 h-12 flex items-center justify-center ${
          musicbtn ? "hidden" : "block"
        }`}
        onClick={() => toggleMusic()}
      >
        <AudioLines />
      </button>
      {musicbtn && (
        <div className="bg-white p-2 rounded-lg w-[20rem] flex text-black items-center">
          <button
            className="text-white bg-red-600 rounded-full p-1"
            onClick={() => toggleMusic()}
          >
            <X />
          </button>
          <div className="flex items-center justify-center w-full gap-5">
            <button
              className="hover:bg-red-600 hover:text-white rounded-full p-2"
              onClick={prevMusic}
            >
              <SkipBack />
            </button>
            {ismusicplaying ? (
              <button
                className="hover:bg-red-600 hover:text-white rounded-full p-2"
                onClick={stopAudio}
              >
                <CirclePause />
              </button>
            ) : (
              <button
                className="hover:bg-red-600 hover:text-white rounded-full p-2"
                onClick={playAudio}
              >
                <CirclePlay />
              </button>
            )}
            <button
              className="hover:bg-red-600 hover:text-white rounded-full p-2"
              onClick={nextMusic}
            >
              <SkipForward />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Music_comp;
