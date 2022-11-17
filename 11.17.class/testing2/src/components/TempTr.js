import TempTd from "./TempTd";

export default function TempTr({ isHead, tableData, head }) {
  //  매개변수를 구조분해할당으로 받았다
  // export default function TempTr(props) {
  // console.log(props.tableData)
  if (isHead) {
    return (
      <tr>
        {head.map((item, index) => (
          // <TempTd key={index} item={tableData[item]} />
          <th key={index}>{tableData[item]}</th>
        ))}
      </tr>
    );
  }
  return (
    <tr>
      {head.map((item, index) => (
        <TempTd key={index} item={tableData[item]} />
      ))}
    </tr>
  );
}
