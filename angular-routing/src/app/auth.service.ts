export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  authenticate() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.isLoggedIn);
        }, 800)
    })
    return promise;
  }
}
