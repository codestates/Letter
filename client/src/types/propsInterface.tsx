type loginFunction = (isModal: boolean) => void;
type logoutFunction = () => void;
type ISetLoginProps = {
  setLogin: loginFunction;
};
type IUserProps = {
  isLogin: boolean;
  handleLogout: logoutFunction;
};
export { ISetLoginProps, IUserProps };
