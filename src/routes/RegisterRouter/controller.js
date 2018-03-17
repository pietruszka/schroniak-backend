const User = (require("./../../data/db").getConnection()).model("User");
const Shelter = (require("./../../data/db").getConnection()).model("Shelter");
const Vet = (require("./../../data/db").getConnection()).model("Vet");

const getRegister = (req, res) => {
  res.render('register');
};

const getUser = (req, res) => {
  res.render('user');
};

const addUser = (req, res) => {
  log('POST status:', res.statusCode);

  var userCredentials = {
    userName = doocumet.getElementById('name'),
    userLastName = document.getElementById('lastName'),
    userEmail = document.getElementById('email'),
    userPhoneNr = document.getElementById('phoneNr')
  }
  var newUser = new UserModel({
    name: userName,
    lastName: userLastName,
    email: userEmail,
    phoneNr: userPhoneNr
  });
  db.save(function(err){
    if(err) throw err;
  });
};

const getShelter = (req, res) => {
  res.render('shelter');
};

const addShelter = (req, res) => {
  log('POST status:', res.statusCode);

  var shelterCredentials = {
      shelterName = doocumet.getElementById('name'),
      shelterStreet = doocumet.getElementById('street'),
      shelterHouseNr = doocumet.getElementById('houseNr'),
      shelterPostalCode = doocumet.getElementById('postalCode'),
      shelterCity = doocumet.getElementById('city'),
      shelterEmail = doocumet.getElementById('email'),
      shelterPhoneNr = doocumet.getElementById('phoneNr'),
  }
    var newShelter = new ShelterModel({
      name: shelterName,
      street: shelterStreet,
      houseNr: shelterHouseNr,
      postalCode: shelterPostalCode,
      city: shelterCity,
      email: shelterEmail,
      phoneNr: shelterPhoneNr
    });
    db.save(function(err){
      if(err) throw err;
    });
};

const getVet = (req, res) => {
  res.render('vet');
};

const addVet = (req, res) => {
  log('POST status:', res.statusCode);

  var vetCredentials = {
      vetName = doocumet.getElementById('name'),
      vetLastName = doocumet.getElementById('lastName'),
      vetEmail = doocumet.getElementById('email'),
      vetPhoneNr = doocumet.getElementById('phoneNr'),
      vetCity = doocumet.getElementById('city'),
      vetLicenceNr = document.getElementById('licenceNr')
  }
    var newVet = new VetModel({
      name: shelterName,
      lastName: vetLastName,
      email: vetEmail,
      phoneNr: vetPhoneNr
      licenceNr: vetLicenceNr
    });
    db.save(function(err){
      if(err) throw err;
    });
};

module.exports = {
  getRegister,
  getUser,
  addUser,
  getShelter,
  addShelter,
  getVet,
  addVet
}
