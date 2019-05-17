class UserDetails {
  constructor () {
    this.isValidUser = false;
    this.loginName = null;
  }

  getIsValid () {
    return this.isValidUser;
  }

  setIsValid (usrBool) {
    this.isValidUser = usrBool;
  }

  getLoginUser () {
    return this.loginName;
  }

  setLoginUser (logname) {
    this.loginName = logname;
  }
}

class Singleton {
  constructor () {
    if (!Singleton.instance) {
      Singleton.instance = new UserDetails();
    }
  }

  getInstance () {
    return Singleton.instance;
  }
};
export default Singleton;
