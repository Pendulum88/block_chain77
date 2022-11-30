import store from "../../../modules/store";
import RegistComponent from "./Component";

export default function RegistContainer() {
  const onClick = (userId, userPw, userName) => {
    store.dispatch();
  };
  return (
    <div>
      <RegistComponent onClick={onClick} />
    </div>
  );
}
