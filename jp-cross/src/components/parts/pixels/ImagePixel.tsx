import { pixelType } from "./const";
import style from "./pixel.module.css";

interface I_imagePixel {
  type: pixelType;
  X: number;
  Y: number;
  click: (X: number, Y: number) => void;
}

const imagePixel = (props: I_imagePixel) => {
  const { type, X, Y, click } = props;

  return (
    <td
      className={`${style.cell} ${style.pixel} ${
        type === pixelType.filled
          ? style.fill
          : type === pixelType.crossout
          ? style.crossout
          : style.empty
      }`}
      onClick={() => {
        click(X, Y);
      }}
    ></td>
  );
};

export default imagePixel;
