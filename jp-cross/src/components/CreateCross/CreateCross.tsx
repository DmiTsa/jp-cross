import Pixel from "../parts/Pixel/Pixel";
import { pixelsTypes } from "../parts/Pixel/const";
import style from "./CreateCross.module.css";

type cross = {
  id: string;
  name: string;
  hSize: number;
  vSize: number;
  pixels: number[][];
};

//dev
const testCross: cross = {
  id: "dd-eee",
  name: "test",
  hSize: 2,
  vSize: 3,
  pixels: [
    [0, 0],
    [0, 0],
    [0, 0],
  ],
};
/////////////////////

const CreateCross: React.FC = () => {
  return (
    <table className={style.table}>
      <tr>
        <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          3
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          5
        </Pixel>
      </tr>
      <tr>
        <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          4
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          4
        </Pixel>
      </tr>
      <tr>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          3
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          12
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          4
        </Pixel>
        <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
      </tr>
      <tr>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          3
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          12
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          4
        </Pixel>
        <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.pixel} isFilled={true}></Pixel>
      </tr>
      <tr>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          3
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          12
        </Pixel>
        <Pixel type={pixelsTypes.number} isFilled={false}>
          4
        </Pixel>
        <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
        <Pixel type={pixelsTypes.pixel} isFilled={true}></Pixel>
      </tr>
    </table>
  );
};

export default CreateCross;
