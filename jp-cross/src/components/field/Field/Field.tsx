import { useState } from "react";
import { v4 as uuid } from "uuid";
import EmptyPixel from "../../parts/pixels/EmptyPixel";
import NumberPixel from "../../parts/pixels/NumberPixel";
import ImagePixel from "../../parts/pixels/ImagePixel";
import { pixelType } from "../../parts/pixels/const";
import cross from "../../types/cross";
import style from "./Field.module.css";

const Field: React.FC = () => {
  //dev
  const testCross: cross = {
    id: "dd-eee",
    name: "test",
    hSize: 10,
    vSize: 10,
    hNumbers: [
      [0, 1, 5, 6, 1, 0, 4, 0, 0, 7],
      [4, 1, 5, 6, 1, 0, 4, 12, 14, 7],
      [8, 1, 5, 6, 1, 2, 4, 12, 14, 7],
    ],
    vNumbers: [
      [0, 22, 5, 6],
      [0, 22, 5, 6],
      [0, 0, 5, 6],
      [0, 22, 5, 6],
      [0, 22, 5, 6],
      [0, 0, 5, 6],
      [0, 22, 5, 6],
      [0, 22, 5, 6],
      [0, 0, 0, 6],
      [0, 22, 5, 6],
    ],
    imagePixels: [
      [1, 0],
      [0, 1],
      [1, 0],
    ],
  };
  /////////////////////

  const initPixels = new Array(testCross.vSize).fill(
    new Array(testCross.hSize).fill(0)
  );

  const [pixels, setPixels] = useState(initPixels);

  const imagePixelClickHandler = (X: number, Y: number) => {
    const newPixels = pixels.map((str, i) => {
      return str.map((el: number, j: number) => {
        return i === Y && j === X ? (el !== 1 ? 1 : 0) : el;
      });
    });
    setPixels(newPixels);
  };

  return (
    <table className={style.table}>
      <tbody>
        {testCross.hNumbers.map((str) => {
          return (
            <tr key={uuid()}>
              {testCross.vNumbers[0].map((_el) => {
                return <EmptyPixel key={uuid()} />;
              })}

              {str.map((el) => {
                return (
                  <NumberPixel key={uuid()}>{el !== 0 ? el : ""}</NumberPixel>
                );
              })}
            </tr>
          );
        })}

        {testCross.vNumbers.map((str, i) => {
          return (
            <tr key={uuid()}>
              {str.map((el) => {
                return (
                  <NumberPixel key={uuid()}>{el !== 0 ? el : ""}</NumberPixel>
                );
              })}
              {pixels[i].map((el: number, j: number) => {
                return (
                  <ImagePixel
                    key={uuid()}
                    type={
                      el === 0
                        ? pixelType.empty
                        : el === 1
                        ? pixelType.filled
                        : pixelType.crossout
                    }
                    X={j}
                    Y={i}
                    click={imagePixelClickHandler}
                  ></ImagePixel>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Field;
