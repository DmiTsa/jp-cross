import { pixelType } from "./const";
import style from "./pixel.module.css";

interface I_imagePixel {
  type: pixelType;
}

const imagePixel = (props: I_imagePixel) => {
  return (
    <td
      className={`${style.cell} ${
        props.type === pixelType.filled
          ? style.fill
          : props.type === pixelType.crossout
          ? style.crossout
          : style.empty
      }`}
    ></td>
  );
};

export default imagePixel;
