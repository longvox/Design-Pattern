class LoginService {
  loginFB(userName) {
    console.log(userName + "Login Facebook");
  }

  loginYoutube(userName) {
    console.log(userName + "Login Youtube");
  }

  loginGithub(userName) {
    console.log(userName + "Login Github");
  }
}

module.exports = LoginService;
