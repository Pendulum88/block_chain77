// 로그인한 유저의 정보
const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

const logIn = (userId, userPw, userDB) => ({
  type: TYPE.LOGIN,
  payload: { userId, userPw, userDB },
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logIn, logOut };

export const initialize = { userId: "", userName: "" };
// 로그인했을때 아이디와 이름을 저장하겠다

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.LOGIN:
      const tempUser = payload.userDB.find(
        (item) => item.userId === payload.userId
      );
      if (tempUser && tempUser.userPw === payload.userPw) {
        return {
          userId: tempUser.userId,
          userName: tempUser.userName,
        };
      } else {
        alert("ID/PW 확인요망");
        return state;
      }

    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
