import style from "./pixel.module.css";

interface I_numberPixel {
  children: React.ReactNode;
}

const numberPixel = (props: I_numberPixel) => {
  return <td className={`${style.cell} ${style.number}`}>{props.children}</td>;
};

export default numberPixel;
