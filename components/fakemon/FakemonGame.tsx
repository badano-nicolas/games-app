import React, { useEffect } from "react";
import mapImage from "../../public/img/fakemon/towns/town-0.png";
import player from "../../public/img/fakemon/chars/main/down.png";

const FakemonGame = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const canvasContext = canvas?.getContext("2d");

    // Add event listener and detect what key it was
    document.addEventListener("keydown", detectKeyDown, true);

    if (canvas) {
      canvas.width = 1024;
      canvas.height = 576;
      canvasContext?.fillRect(0, 0, canvas?.width, canvas?.height);

      const image = new Image();
      image.src = mapImage.src;

      const playerImage = new Image();
      playerImage.src = player.src;

      image.onload = () => {
        canvasContext?.drawImage(image, -570, -160);
        canvasContext?.drawImage(
          playerImage,
          0,
          0,
          playerImage.width / 4,
          playerImage.height,
          canvas.width / 2 - playerImage.width / 4,
          canvas.height / 2 - playerImage.height / 2,
          playerImage.width / 4,
          playerImage.height
        );
      };
    }
  }, []);

  const detectKeyDown = (event: any) => {
    const key = event.key;
    switch (key) {
      case "w":
        console.log("pressed w");
        break;
      case "s":
        console.log("pressed s");
        break;
      case "d":
        console.log("pressed d");
        break;
      case "a":
        console.log("pressed a");
        break;
      default:
        break;
    }
  };

  

  return (
    <div className="pl-16">
      <canvas></canvas>
    </div>
  );
};

export default FakemonGame;
