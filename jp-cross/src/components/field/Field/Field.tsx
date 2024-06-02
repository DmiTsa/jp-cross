// import { useState } from "react";
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
    hSize: 2,
    vSize: 3,
    hNumbers: [
      [0, 1],
      [2, 1],
    ],
    vNumbers: [
      [0, 22],
      [10, 1],
      [0, 31],
    ],
  };
  /////////////////////

  // const initPixels = new Array(testCross.vSize).fill(
  //   new Array(testCross.hSize).fill(0)
  // );

  // const [pixels, setPixels] = useState(initPixels);

  const imagePixelClickHandler = (X: number, Y: number) => {
    console.log(X, Y);
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
              {testCross.hNumbers[0].map((_el, j) => {
                return (
                  <ImagePixel
                    key={uuid()}
                    type={pixelType.empty}
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
