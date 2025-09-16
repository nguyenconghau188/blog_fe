class FakeApi {
  constructor() {
    this.user = {
      username: "admin",
      password: "123456",
    };
  }

  login({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          username === this.user.username &&
          password === this.user.password
        ) {
          resolve({ token: "fake-jwt-token", username });
        } else {
          reject(new Error("Sai tài khoản hoặc mật khẩu"));
        }
      }, 500); // giả lập call API 0.5s
    });
  }
}

export default new FakeApi();
