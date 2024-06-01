import style from './Field.module.css';

const Field: React.FC = () => {
  return (
    <table className={style.table}>
      <tr>
        <td className={`${style.cell} ${style.noBorder}`}></td>
        <td className={`${style.cell} ${style.noBorder}`}></td>
        <td className={`${style.cell} ${style.noBorder}`}></td>
        <td className={`${style.cell} ${style.number}`}>4</td>
        <td className={`${style.cell} ${style.number}`}>5</td>
      </tr>
      <tr>
        <td className={`${style.cell} ${style.noBorder}`}></td>
        <td className={`${style.cell} ${style.noBorder}`}></td>
        <td className={`${style.cell} ${style.noBorder}`}></td>
        <td className={`${style.cell} ${style.number}`}>3</td>
        <td className={`${style.cell} ${style.number}`}>7</td>
      </tr>
      <tr>
        <td className={`${style.cell} ${style.number}`}>2</td>
        <td className={`${style.cell} ${style.number}`}>5</td>
        <td className={`${style.cell} ${style.number}`}>9</td>
        <td className={`${style.cell} ${style.pixel}`}></td>
        <td className={`${style.cell} ${style.pixel} ${style.fill}`}></td>
      </tr>
      <tr>
        <td className={`${style.cell} ${style.number}`}>4</td>
        <td className={`${style.cell} ${style.number}`}>23</td>
        <td className={`${style.cell} ${style.number}`}>12</td>
        <td className={`${style.cell} ${style.pixel}`}></td>
        <td className={`${style.cell} ${style.pixel}`}></td>
      </tr>
      <tr>
        <td className={`${style.cell} ${style.number}`}></td>
        <td className={`${style.cell} ${style.number}`}>3</td>
        <td className={`${style.cell} ${style.number}`}>22</td>
        <td className={`${style.cell} ${style.pixel}`}></td>
        <td className={`${style.cell} ${style.pixel}`}></td>
      </tr>
    </table>
  );
};

export default Field;
