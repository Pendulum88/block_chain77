export default function Count2Component({
  store,
  changeSecondInput,
  secondInput,
  jump2Count,
  count2Up,
  count2Down,
}) {
  return (
    <div>
      <div>{store.getState().count2}</div>
      <div>
        <input
          onInput={changeSecondInput}
          type={"number"}
          value={secondInput}
        />
        <button onClick={jump2Count}>Jump</button>
        <div>
          <button onClick={count2Up}>count2 : + 1</button>
          <button onClick={count2Down}>count2 : - 1</button>
        </div>
      </div>
    </div>
  );
}
