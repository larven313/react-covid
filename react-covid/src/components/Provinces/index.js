import Province from "../Province";
import ProvinceStyled from "./Province.styled";
import styles from "./Provinces.module.css";

const Provinces = (props) => {
  const { provinces, title, subtitle } = props;
  return (
    <ProvinceStyled>
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <table className="table" cellSpacing="0" cellPadding="10">
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {provinces.map(function (province, index) {
              return <Province key={index} index={index} province={province} />;
            })}
          </tbody>
        </table>
      </div>
    </ProvinceStyled>
  );
};
export default Provinces;
