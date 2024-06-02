import { useState } from "react";
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
      [0, 2],
      [1, 1],
      [0, 3],
    ],
  };
  /////////////////////

  const initPixels = new Array(testCross.vSize).fill(
    new Array(testCross.hSize).fill(0)
  );

  const [pixels, setPixels] = useState(initPixels);

  return (
    <table className={style.table}>
      {testCross.hNumbers.map((str) => {
        return (
          <tr>
            {testCross.vNumbers[0].map((_el) => {
              return <EmptyPixel />;
            })}

            {str.map((el) => {
              return <NumberPixel>{el !== 0 ? el : ""}</NumberPixel>;
            })}
          </tr>
        );
      })}

      {testCross.vNumbers.map((str) => {
        return (
          <tr>
            {str.map((el) => {
              return <NumberPixel>{el !== 0 ? el : ""}</NumberPixel>;
            })}
            {testCross.hNumbers[0].map((_el) => {
              return <ImagePixel type={pixelType.empty}></ImagePixel>;
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default Field;
