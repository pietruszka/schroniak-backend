const getLogin = (req, res) => {
  res.render('login');
};
const addLogin = (req, res) => {
  var userLoginCredentials = {
    userLoginName = doocumet.getElementById('name'),
    userLoginLastName = document.getElementById('lastName'),
    userLoginEmail = document.getElementById('email'),
    userLoginPhoneNr = document.getElementById('phoneNr')
  }
  if(
    userLastName === userName &&
    userLoginLastName === userLastName &&
    userLoginEmail === userEmail &&
    userLoginPhoneNr === userPhoneNr
  )
  res.render('profile');
  else{
    res.render('error');
  }
};

module.exports = {
  getLogin,
  addLogin
}
