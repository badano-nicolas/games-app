import React, { useEffect } from "react";
import mapImage from "../../public/img/fakemon/towns/town-0.png";

const FakemonGame = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const canvasContext = canvas?.getContext("2d");

    if (canvas) {
      canvas.width = 1024;
      canvas.height = 576;
      canvasContext?.fillRect(0, 0, canvas?.width, canvas?.height);

      const image = new Image();

      image.src = mapImage.src;
      image.onload = () => {
        canvasContext?.drawImage(image, 0, 0);
      };
    }
  }, []);

  return (
    <div>
      <canvas></canvas>
    </div>
  );
};

export default FakemonGame;
