export default function LogOut({ user, setUser }) {
  return (
    <div>
      {!user || `${user}님 어서오세요`}
      {/* 
        || : 앞에가 아니면 뒤에것을 띄운다
       */}
      <button
        onClick={() => {
          setUser("");
        }}
      >
        Log out
      </button>
    </div>
  );
}
