type loginFunction = (isModal: boolean, token: string) => void;
type logoutFunction = () => void;
type userinfo = {
  email: string;
  password: string;
  name: string;
  nickname: string;
  gender: string;
};
type setStateFunction = (userinfo: userinfo) => void;
type ISetLoginProps = {
  setLogin: loginFunction;
};
type IUserProps = {
  isLogin: boolean;
  handleLogout: logoutFunction;
};

type IMypageProps = {
  isLogin: boolean;
  handleLogout: logoutFunction;
  accessToken: string;
  userinfo: userinfo;
  setUserinfo: setStateFunction;
};
type ISignupProps = {
  setIsLogin: loginFunction;
  userinfo: userinfo;
  setUserinfo: setStateFunction;
};
export { ISetLoginProps, IUserProps, ISignupProps, IMypageProps };
