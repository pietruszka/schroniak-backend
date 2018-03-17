const Router = require('express').Router;

class LoginRoute {
  constructor() {
    this.router = Router();
    this.router.get('/login', getLogin);
    this.router.post('/login', addLogin);
  }
  getRouter() {
    return this.router;
  }
}
module.exports = LoginRoute;
