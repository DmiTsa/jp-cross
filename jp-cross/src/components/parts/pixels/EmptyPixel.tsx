import style from "./pixel.module.css";

const emptyPixel: React.FC = () => {
  return <td className={`${style.cell} ${style.noBorder}`}></td>;
};

export default emptyPixel;
