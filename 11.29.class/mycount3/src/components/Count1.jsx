export default function Count1Component({
  store,
  changeFirstInput,
  firstInput,
  jump1Count,
  count1Up,
  count1Down,
}) {
  return (
    <div>
      <div>{store.getState().count1}</div>
      <div>
        <input
          onInput={changeFirstInput} //
          type={"number"} //
          value={firstInput}
        />
        <button onClick={jump1Count}>Jump</button>
        <div>
          <button onClick={count1Up}>count1 : + 1</button>
          <button onClick={count1Down}>count1 : - 1</button>
        </div>
      </div>
    </div>
  );
}
