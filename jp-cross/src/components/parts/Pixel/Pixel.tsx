import { pixelsTypes } from "./const";
import style from "./Pixel.module.css";

interface I_pixel {
  type: pixelsTypes;
  isFilled: boolean;
  children?: React.ReactNode;
}

const Pixel = (props: I_pixel) => {
  const { type, isFilled, children = "" } = props;
  return (
    <td
      className={`${style.cell} ${
        type === pixelsTypes.pixel
          ? style.pixel
          : type === pixelsTypes.number
          ? style.number
          : type === pixelsTypes.noBorder
          ? style.noBorder
          : ""
      } ${isFilled ? style.fill : ""}`}
    >
      {children}
    </td>
  );
};

export default Pixel;
