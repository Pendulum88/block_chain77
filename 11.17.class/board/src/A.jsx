import B from "./B";

export default function () {
  return (
    <div>
      <div style={{ display: "block", margin: "20px" }}>
        <label htmlFor="name">이름</label>
        <input id="name" type="text" autoComplete="off" spellCheck="false" />
      </div>
      <div style={{ display: "block", margin: "20px" }}>
        <textarea
          name=""
          id="text"
          cols="30"
          rows="10"
          spellCheck="false"
          style={{ resize: "none" }}
        ></textarea>
      </div>
      <div style={{ display: "block", margin: "20px" }}>
        <button onClick={btnClick}>작성완료</button>
        <B />
      </div>
    </div>
  );

  function btnClick() {
    console.log(2342);
  }
}
