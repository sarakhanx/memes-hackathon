"use client";

import { useState } from "react";
import { memes } from "@/libs/memes-data";
import ImageComponent from "./ImageComponent";

const InputDate: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [meme , setMeme] = useState<Meme | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Started Getting Quote");
    if (!selectedDay) return;
    const memeOnDate = memes.find((meme) => meme.id === selectedDay);
    if(memeOnDate) {
        setMeme(memeOnDate)
    }
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center space-x-2 ring-2 ring-pink-700 bg-gray-900/20 ibm-plex-sans-bold p-2 rounded-sm">
          <input
            type="number"
            className="w-12 bg-transparent text-center"
            placeholder="วันที่"
            min={1}
            max={31}
            value={selectedDay?.toString() || ""}
            onChange={(e)=> setSelectedDay(parseInt(e.target.value))}
            />
          <span>/</span>
          <input
            type="number"
            className="w-12 bg-transparent text-center"
            placeholder="เดือน"
            />
          <span>/</span>
          <input
            type="number"
            className="w-12 bg-transparent text-center"
            placeholder="ปีเกิด"
            />
        </div>
        <button type="submit" className="w-full bg-pink-700 rounded-md mt-2">
          Submit
        </button>
      </form>
    </div>
    <div className="flex flex-col justify-center">
        <ImageComponent meme={meme}/>
    </div>
            </>
  );
};

export default InputDate;
