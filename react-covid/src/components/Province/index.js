const Province = (props) => {
  const { province, index } = props;

  const name = province.name ?? province.kota;
  const confirmed = province.numbers?.confirmed ?? province.kasus;
  const recovered = province.numbers?.recovered ?? province.sembuh;
  const treatment = province.numbers?.treatment ?? province.dirawat;
  const death = province.numbers?.death ?? province.meninggal;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{confirmed}</td>
      <td>{recovered}</td>
      <td>{treatment}</td>
      <td>{death}</td>
    </tr>
  );
};

export default Province;
