import Pixel from "../parts/Pixel/Pixel";
import { pixelsTypes } from "../parts/pixels/const";
import style from "./CreateCross.module.css";

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

// <table className={style.table}>
// <tr>
//   <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     3
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     5
//   </Pixel>
// </tr>
// <tr>
//   <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.noBorder} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     4
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     4
//   </Pixel>
// </tr>
// <tr>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     3
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     12
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     4
//   </Pixel>
//   <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
// </tr>
// <tr>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     3
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     12
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     4
//   </Pixel>
//   <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.pixel} isFilled={true}></Pixel>
// </tr>
// <tr>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     3
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     12
//   </Pixel>
//   <Pixel type={pixelsTypes.number} isFilled={false}>
//     4
//   </Pixel>
//   <Pixel type={pixelsTypes.pixel} isFilled={false}></Pixel>
//   <Pixel type={pixelsTypes.pixel} isFilled={true}></Pixel>
// </tr>
// </table>
