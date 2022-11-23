export default function Header({ isOnline }) {
  if (isOnline) {
    return (
      <div>
        <h1>
          Header.jsx <div>Online</div>
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          Header.jsx <div>Offline</div>
        </h1>
      </div>
    );
  }
}
