import TempTr from "./TempTr";

// export default function TempTable({ a, b, c }) {
//   return (
//     <table>
//       <thead>
//         <TempTr isHead={true} tableData={b} head={c} />
//       </thead>
//       <tbody>
//         {a.map((item, index) => (
//           <TempTr key={index} tableData={item} head={c} />
//         ))}
//       </tbody>
//     </table>
//   );
// }

export default function TempTable(props) {
  return (
    <table>
      <thead>
        <TempTr
          isHead={true}
          tableData={props.headData}
          head={props.tempHead}
        />
      </thead>
      <tbody>
        {props.tempArr.map((item, index) => (
          <TempTr key={index} tableData={item} head={props.tempHead} />
        ))}
      </tbody>
    </table>
  );
}
