"use client";
import React, { useRef, useEffect } from "react";

function wrapText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

const ImageComponent: React.FC<Props> = ({ meme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadImage = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  useEffect(() => {
    if (meme) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          // Set canvas dimensions
          canvas.width = 500;
          canvas.height = 500;

          // Set background color
          ctx.fillStyle = "#000000";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Set text properties
          ctx.font = "20px ibm-plex-sans-bold";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // Draw wrapped text on canvas
          const maxWidth = canvas.width - 100;
          const lineHeight = 60;
          const x = canvas.width / 2;
          const y = canvas.height / 2;
          wrapText(ctx, meme.meme, x, y, maxWidth, lineHeight);
        }
      }
    }
  }, [meme]);

  return (
    <>
    <div className="flex justify-center p-5">
      <canvas className="border rounded-lg overflow-hidden" ref={canvasRef} />
      
    </div>
    <button className="w-full bg-indigo-700 rounded-md mt-2 p-2" onClick={downloadImage}>Download Image</button>
    </>
  );
};

export default ImageComponent;
